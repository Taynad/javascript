async function login(){
    //obtém os valores dos inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try{
        //faz a requisição post para o endpoint de login
        const response = await fetch ('http://localhost:8080/login',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({username, password}),
        });

        if(!response.ok){
            throw new Error ("Erro na resposta do servidor: " + response.statusText);
        }

        //processa a resposta
        const result = await response.text();
        alert(`Login bem-sucedido ${result}`);
    }catch(error){
        console.error('Erro ao conectar a API', error);
        alert('Erro ao tentar fazer login, tente novamente');
    }
}