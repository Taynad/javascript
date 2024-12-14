let num = [5,8,2,9,3];

//verifica o tamanho do array
console.log(`o vetor tem ${num.length} posições`);
//coloca o vetor em ordem crescente
num.sort();
console.log(num);
console.log('------------------------------------')
//percorrendo uma array
for(let p =0; p <= num.length; p++){
    console.log('Usando o for')
    console.log(`A posição ${p} tem o valor ${num[p]}`)
    console.log('------------------------------------')
}

//percorrendo com for in
for(let pos in num){
    console.log("Usando o for in")
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//procurando um valor dentro da array
console.log(num.indexOf(4));
console.log(num.indexOf(8));

