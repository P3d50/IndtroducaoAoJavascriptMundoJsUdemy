/**
 * Javascript é uma linguagem de programação dinâmica.
 *  Uma linguagem de programação dinâmica é uma 
 *  linguagem de programação na qual determinadas operações 
 *  podem ser feitas em tempo de execução em vez de em tempo 
 *  de compilação.
 * 
 *  Em JavaScript é possível mudar o tipo de uma variável ou 
 *  adicionar novas propriedades ou métodos a um objeto enquanto
 *  o programa está sendo executado.
 * 
 * Javascript possui os seguintes tipos de dados
 *  Boolean
 *  Array
 *  Null
 *  Undefined
 *  Symbol
 *  Objecte
 * Function
*/

/**
 * Number - todos os números reais que aprendemos nas aulas
 * de matemática. Podemos usar "+","-","*","/" para executar operações com números.
 * Estes tipos numéricos não são infinitos. Porém o javascript trabalha 
 * com ponto flutuante de dupla precisão (double) o que permite valores 
 * muito altos.
 * - Number.MAX_VALUE
 * - Number.MIN_VALUE
 */
let numeroInteiro = 100;
let numeroDecimal = 5.38;
let numeroNegativo = -200.99;
let soma = numeroDecimal+numeroInteiro;
let subtracao = numeroInteiro-numeroDecimal;
let divisao = numeroInteiro/numeroDecimal;
let multiplicacao = numeroInteiro*numeroDecimal;
let max = Number.MAX_VALUE;
let min = Number.MIN_VALUE;

/** 
 * String - Valores de texto, normalmente
 * chamados de "cadeia de caracteres."
*/ 
let ola = "Olá";
let mundo = 'mundo';

/**
 * Caracteres especiais - para inserir caracteres 
 * especiais utilizamos a barra invertida.
*/
let caracteresEspeciais  = "Lorem ipsum dolor sit amet, \n consectetur adipiscing elit, \\sed do eiusmod tempor \' \" incididunt ut labore et dolore magna aliqua."

/**
 * Concatenação de Strings - podemos concatenar Strings de diversas formas
 *      Utilizando o sinal de "+"
 *      String.concat() permite concaternar uma ou mais Strings
 *      Template de Strings, utiliza ${expressão}
 */
let concatenado = ola+mundo;
let concat = ola.concat(mundo," uma string", "mais uma string");
let olaTemplate = `ola ${mundo} ${1+1}`;

/**
 * Boolean - true ou false
 *      O JavaScrtipt entende certos valores do outros tipos de dados 
 *      como verdadeiro ou falso
 *      Comparações
 * 
 */
let comparacao = 1==1;//true
let comparacao2 = 1=="1";//true
let comparacao3 = 1==="1";//false - estritamente igual
let comparacao4 = "banana" != "banana";//false