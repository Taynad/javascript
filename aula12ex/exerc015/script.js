function verificar (){
    var data = new Date ();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'bebe_menino.jpeg')
            }else if (idade < 18){
                img.setAttribute('src', 'jovem_homem.jpeg')
            }else if (idade < 50){
                img.setAttribute('src', 'homem_adulto.jpeg')
            }else{
                img.setAttribute('src', 'idoso_homem.jpeg')
            }
                
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'bebe_menina.jpeg')
            }else if (idade < 18){
                img.setAttribute('src', 'jovem_mulher.jpeg')
            }else if (idade < 50){
                img.setAttribute('src', 'mulher_adulta.jpeg')
            }else{
                img.setAttribute('src', 'idosa_mulher.jpeg')
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
        img.style.borderRadius = '100%'
    }
}
