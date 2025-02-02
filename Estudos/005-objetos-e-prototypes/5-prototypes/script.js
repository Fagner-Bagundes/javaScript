/*

JavaScript é baseado em protótipos (prototypes) para passar propriedades e métodos de um objeto para o outro.

Definição de protítipo:
---> Protótipo é o termo usado para se reaferir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos objetos tem uma referência interna para o protótipo (__proto__), que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontar (ou não) tal membro

*/



// Construrora --> molde (classe)
function Pessoa(nome, sorbrenome){
    this.nome = nome;
    this.sobrenome = sorbrenome;
    // this.nomeCompleoto = () =>{
    //     return `Original: ` + this.nome + ` ` + this.sobrenome
    // }
    
}


Pessoa.prototype.nomeCompleoto = function(){
    return this.nome + ` ` + this.sobrenome;
};

// instância
const p1 = new Pessoa(`Fag`, `Ferreira`)
console.dir(p1)
console.dir(p1.nomeCompleoto())


function soma(a, b){
    return a + b
}

console.dir(soma)

// Quando você usa um mesmo método em cada objeto que você cria, exemplo:

// perceba que o código repete várias vezes, isso acaba usando muita memória e diminui a performance no computador do cliente

// os Prototypes foram criados para resolver esse problema!!

// __proto__ --> é o prototype, ele linka o objeto a uma propriedade da função construtora chamada prototype
// prototype é como se fosse um lugar onde você guarda metodos de um objeto, em que ele não se repete ao longo do código, e sim é referênciado

function Car(model, year) {
    this.model = model;
    this.year = year;
  }


  Car.prototype.getDetails = function() {
    return `${this.model} - ${this.year}`
};

  
let myCar = new Car("Toyota", 2020);
console.log(myCar.getDetails()); // "Toyota - 2020"

let data = new Date();

console.dir(data)


