function contar (){
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    
    if(ini.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: ';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1;
        }

        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c } `;
            }
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c } ` ;
            }
        }
    }
        
}

