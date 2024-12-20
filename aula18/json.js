
function buscarCEP (){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+ input + '/json/');
    ajax.send();

    ajax.onload = function (){
        //document.getElementById('texto').innerHTML = this.responseText;
        //transformando em objeto
        let obj = JSON.parse(this.responseText);
        let logradouro = obj.logradouro;
        let bairro  = obj.bairro;
        let localidade = obj.localidade;

        document.getElementById('texto').innerHTML = "Logradouro: " + logradouro  + "<br> Bairro: " + bairro + "<br> Localidade: " + localidade


    //document.getElementById('area').innerHTML = this.responseText;
    //let obj = JSON.parse(this.responseText);
    //alert(obj.bairro);
} 
    
}

    