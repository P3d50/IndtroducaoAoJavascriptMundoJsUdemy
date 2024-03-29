/**
 * Crie uma esrutura de controle dentro da funcao mudarPropriedade
 * que efetue a lógica pedida nos comentários
 */


function mudarPropriedade(nomePropriedade, novoValor){
    switch(nomePropriedade){
        // O case rodas é um exemplo para as próximas partes
        case "rodas":
            if(novoValor > 1){
                carro.rodas = novoValor;
            }
            else{
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            if(novoValor>0){
                carro.portas = novoValor;
            }else{
                return "Minimo de portas precisa ser 1";
            }
            // Para alterar as portas, é necessário que o
            // novo valor seja maior que 0
            // senão deve retornar a string "Minimo de portas precisa ser 1"
            break;
        case "cor":
            // para alterar a cor, novo valor pode ser igual a cinza ou preto ou vermelho
            // se for diferente, retornar "Cor invalida"
            if(novoValor=="cinza"||novoValor=="preto"||novoValor=="vermelho"){
                carro.cor = novoValor;
            }else{
                return "Cor invalida";
            }
            break;
        case "ano":
            carro.ano = novoValor;
            if(carro.ano==2019){
                carro.estado="novo";
            }else{
                carro.estado="usado";
            }
            break;
            
        // criar um case para o "ano"
        // alterar o ano do carro para o ano informado
        // se o ano for igual a 2019, alterar o estado para "novo" 
        // senao alterar o estado para "usado"
        default:
            return "Propriedade invalida";
            // retornar a fraase "Propriedade invalida";
    }
    
    
    
    // retornar a frase Alteracao concluida somente se foi possivel
    // alterar um dado do objeto.
    return "Alteracao concluida"
}
