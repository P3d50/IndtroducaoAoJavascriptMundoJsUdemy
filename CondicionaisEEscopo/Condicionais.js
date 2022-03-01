let x = 1;

if(x == 1){
    console.log("x==1");
}

let disponivel = true;
let quantidade = 5;

if(quantidade>0 && disponivel){
    console.log("produto disponível");
}else{
    console.log("produto indisponível");
}

let estado = "SP";
//switch usa comparação estrita ===
switch(estado){
    case "SP":
        console.log("São Paulo");
        break;
    case "RJ":
        console.log("Rio de Janeiro");
        break;
    case "ES": 
        console.log("Espírito Santo");
        break; 
    default:
        console.log("Estado não cadastrado");
        break;
}

