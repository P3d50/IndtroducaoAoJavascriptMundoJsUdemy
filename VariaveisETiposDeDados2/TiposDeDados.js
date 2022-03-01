/**
 * Array(vetor) - é uma lista ou coleção de dados que pode ser
 * acessada por índice.
 */
let vetor = [];
let vetor2 = [1,22,0,100];
let vetor3 = [1,"Olá Mundo", true,[1,2,3]];
let ola = vetor3[1];
vetor2[1]=44;
vetor2[4]=101;

/**
 * Null é um tipo de dado que representa a falta de valor
 * de outro tipo de dado.
 */
let x = null;
let y = 1;
y=x;

/**
 * Undefined é um tipo de dado retornado quando criamos uma 
 * variável e tentamos acessar seu valor antes de ter atrubuído
 * algo a ela.
 */
let z;
let v=z;
null==undefined;//true
null===undefined;//false
null!=undefined;//false
null!==undefined;//true


/**
 * Objeto é um tipo de dados composto pelos outros tipos, com ele
 * podemos organizar informações relacionada em uma variável.
 */
let objetoVazio = {};
let carro = {
    rodas:4,
    portas:2,
    nome:"um nome",
    ligado:false
};
carro.portas = 3;
carro["portas"] = 4;

/**
 * Funções são utilizadas para criarmos uma sequência de operadores
 * que serão executados
 */
let olaMundo = function(){
    console.log(vetor3[1]);
    console.log(ola);
}

olaMundo();

function olaMundo2(){
    console.log(vetor3[1]+"2");
    console.log(`${ola} 2`);
}
olaMundo2();

let somar = function(valor1,valor2){
    let resultado = valor1+valor2;
    console.log(resultado);
}
somar(1,2);
somar(3,4);

let somarReturn = function(valor1,valor2){
    return valor1+valor2;
}
console.log(somarReturn(2,5));



 