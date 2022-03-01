for(let i=0;i<10;i++){
    console.log(i);
}

let lista = ["cachorro","gato","galinha"];
for(let i=0;i<lista.length;i++){
    console.log(lista[i]);
}

let valores = [1,2,3,4,5];
for(let i=0;i<valores.length;i++){
    valores[i] = valores[i]*2;
    console.log(valores[i]);
}


let i =5;
for(;i<10;i++){
    console.log(i);
}

i =3;
for(;i<10;){
    console.log(i);
    i=i+2;
}

for(bicho of lista){
    console.log(bicho);
}

let num = 1;
while(num<10){
    console.log(`valor: ${ num}`);
    num=num+2;
}

num=1;
do{
    console.log(num);
    num++;
}while(num<10);

num=1;
while(num<10){
    console.log(`valor: ${ num}`);
    if(num==6){
        break;
    }
    num++;
}

num=1;
for(;num<10;++num){
    if(num==6){
        continue;
    }
    console.log(`valor: ${ num}`);
}

