const url = `https://jsonplaceholder.typicode.com/posts`

const loadingElement = document.querySelector(`#loading`)
const postContainer = document.querySelector(`#posts-container`)

const postPage = document.querySelector(`#post`)
const container = document.querySelector("#post-container")
const commentsContainer = document.querySelector(`#comments-container`)

const commentForm = document.querySelector(`#comment-form`);
const emailInput = document.querySelector(`#email`)
const bodyInput = document.querySelector(`#body`);


// get id from URL
const urlSearchParams = new URLSearchParams(window.location.search)
const postID = urlSearchParams.get("id");

// pega todos os posts
async function getAllPosts() {
  const response = await fetch(url);
  const data = await response.json();
  loadingElement.classList.add(`hide`);
  
  data.map((post) =>{
    const div = document.createElement(`div`);
    const title = document.createElement(`title`);
    const body = document.createElement(`p`);
    const link = document.createElement(`a`);

    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = `Ler`;
    link.setAttribute("href", `/post.html?id=${post.id}`)

    div.appendChild(title)
    div.appendChild(body)
    div.appendChild(link)

    postContainer.appendChild(div)
  })
};


//  pega posts individuais
async function getIndividualPost(id) {

  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`)
  ])

  const dataPost = await responsePost.json();
  const dataComments = await responseComments.json()

  loadingElement.classList.add(`hide`)
  postPage.classList.remove("hide")

  const title = document.createElement(`h1`);
  const body = document.createElement(`p`)

  title.innerText = dataPost.title;
  body.innerText = dataPost.body;

  container.appendChild(title)
  container.appendChild(body)

  console.log(dataComments);

  dataComments.map((comment)=>{
    createComment(comment)
  })
  
}

// criador de comentários 

function createComment(comment) {

  const div = document.createElement(`div`)
  const email = document.createElement(`h3`)
  const commentBody = document.createElement("p")

  email.innerText = comment.email;
  commentBody.innerText = comment.body;
  
  div.appendChild(email)
  div.appendChild(commentBody)

  commentsContainer.appendChild(div)
  
}


// postando novos comentários:

async function postComent(comment) {

  const response = await fetch(`${url}/${postID}/comments`, {
    method: `POST`,
    body: comment,
    headers: {
      "Content-type": `application/json`
    }

  });
  
  const data = await response.json();
  createComment(data);
  

}


if (!postID) {
  getAllPosts()
} else{
  getIndividualPost(postID)

  // Add event to comment form
  commentForm.addEventListener(`submit`, (e)=>{
    e.preventDefault()
    console.log(email);

    let comment = {
      email: emailInput.value,
      body: bodyInput.value
    }
    comment = JSON.stringify(comment)   
    postComent(comment)

  })
}