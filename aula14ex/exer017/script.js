function tabuada() {
    var num = document.getElementById('numero');
    var res = document.getElementById('res');

    if(num.value.length == 0){
        window.alert('O campo está vazio, por favor informar um número!')
    }else{
        var mult = 0;
        var n = Number(num.value);
        res.innerHTML = '';
        for(var i = 0; i <= 10; i++){
            mult = n*i;
            res.innerHTML += `${n} X ${i} = ${mult} <br>`;
        }

    }
}