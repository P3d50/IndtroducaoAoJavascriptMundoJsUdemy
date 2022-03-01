/*  var: Declara uma variável 
    podendo atribuir um número na sua criação. Apesar de ser
    muito utilizado não é mais recomendado pelas boas práticas
        de programação
*/
var umNumero = 5;

 /* 
    let: Declara uma variável com escopo de bloco
  */
 let outroNumero = 10;

 /* 
    const: Declara uma variável apenas para leitura. 
    Após atribuir um valor a uma const, não será possível
    altera-lo
  */
const ola = "Olá com const";


/*
    Case-Sensitive: javascript é diferencia Nome de nome
 
 */
let nome = "Paulo";
let NOME = "Pedro";

/* 
    Caracteres válidos:

    Letras: Pedemos usar letras maiúscula e minúsculas, devemos evitar
    cedilha e acentuação

    Números: Desde que a variável comece com uma letra, podemos
    usar números na definição

    Underline e Cifrão: São permitidos em qualquer posição
    e são mais usados nas variáveis de bibliotecas e frameworks

 */
let acentuação = "pior que JavaScript aceita";
let w3c = "https://www.w3schools.com/";
let _underline = "declaraçao com underline";
let $cifrao = "declaração com cifrão";