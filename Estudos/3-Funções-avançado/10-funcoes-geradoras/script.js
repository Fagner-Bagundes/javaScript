function* geradora1() {
    //  código qualquer...
    yield `Valor 1`;
    //  código qualquer...
    yield `Valor 2`;
    //  código qualquer...
    yield `Valor 3`;
    //  código qualquer...
};


const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

console.log(`--------------------------------------------`);

// funções geradoras infinitas:

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++
    }
}

let g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log(`--------------------------------------`);

// Gerador que delega tareda para outra gerado

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
let g3 = geradora3()

function* geradora4(){
    yield* g3
    yield 3;
    yield 4;
    yield 5;
}
let g4 = geradora4();

for(let valor of geradora4()){
    console.log(valor);
}

console.log(`------------------------------------------`);

function* geradora5(){
 yield function(){
    console.log(`vim do da função 1`);
 }   

 yield function(){
    console.log(`Vim da função 2`);
 }
}

const g5 = geradora5();
const funcao1 = g5.next().value;
const funcao2 = g5.next().value;

funcao1()
funcao2()


// o Return acaba com a função e esquece dos yields que vem depois










