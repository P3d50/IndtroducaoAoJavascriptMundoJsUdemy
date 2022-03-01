/**
 * A função abaixo receberá 2 parâmetros,
 *  um vetor com apenas valores numéricos e um número.
 * 
 * Faça com que ela multiplique cada item do vetor pelo segundo 
 * parâmetro apenas se o item do vetor for maior que 5. 
 * Após isso, ela deve retornar o novo vetor.
 */

 function calcularVetor(vetor, numero){
    
    for(let i=0;i<vetor.length;i++){
        if(vetor[i]>5){
            vetor[i]=vetor[i]*numero;
        }
    }
    return vetor;
}

/**
 * Complete a função abaixo de forma que ela receba uma variável 
 * como parametro e retorne um vetor no final.
 * Essa variável passada por parametro terá as seguintes 
 * propriedades:
 * 1) Ela também será um vetor.
 * 2) Cada um de seus valores serão vetores com números.
 * Você deve processar esta variavel de forma a retornar 
 * um novo vetor com a soma dos valores destes subvetores.
 * 
 */


function somarSubVetores(vetor){
    let resultado = [];
    for(let item of vetor){
        let soma = 0;
        for(let num of item){
            soma=soma+num;
        }
        resultado[resultado.length] =soma;
        soma=0;
    }
    return resultado;
}