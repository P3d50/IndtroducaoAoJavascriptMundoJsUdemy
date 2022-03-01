/**
 * Crie uma função chamada testeFinal que:
 * Receberá uma String e um número como parâmetros
 * Testará se a String é igual as seguintes palavras 
 *  e executará um código para o descrito em cada caso.
 * “mundojs”: Exibirá "MundoJS" no console e retornará 
 *  o parametro Número.
 * “soma”: Retornará o resultado da soma da metade do 
 *  parâmetro número com o quadrado dele mesmo.
 * “vetor”: Criará e retornará um vetor com 5 elementos 
 *  onde cada elemento é igual ao parâmetro número mais 
 *  o dobro do índice do vetor.
 * “booleano”: Faça o mesmo vetor do caso vetor e retorne 
 *  true (o valor booleano, não uma string) se a soma dos 
 *  elementos deste vetor for maior que 35, do contrário, 
 *  exibe false.
 * 
 */


 function testeFinal(string,numero){
    let retorno;
    switch(string){
        case "mundojs":
            console.log("MundoJS");
            retorno = numero;
            break;
        case "soma":
            retorno = (numero/2)+(numero*numero);
            break;
        case "vetor":
            retorno = criaVetor([],numero);
            break;
        case "booleano":
            let soma = 0;
            for(let num of criaVetor([],numero)){
                soma+=num;
            }
           retorno = soma>35;
            break;
        default: retorno = -1;
            
    }
    return retorno;
}

function criaVetor(vetor,numero){
    while(vetor.length<5){
        vetor[vetor.length] = numero+(vetor.length*2);
    }
    return vetor;
}
