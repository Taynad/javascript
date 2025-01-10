async function login(){
    //obtém os valores dos inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

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
        alert(`${result}`);
    }catch(error){
        console.error('Erro ao conectar a API', error);
        alert('Erro ao tentar fazer login, tente novamente');
    }
}

async function register(){
    //obtendo os valores dos inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try{
        //fazendo a nossa requisição para o endpoint de resgister
        const response = await fetch ('http://localhost:8080/register', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({username, password}),
        });

        if(!response.ok){
            throw new Error ("Erro na resposta do servidor: " + response.statusText);
        }

        //processa a resposta da API
        const result = await response.text();
        alert(`${result}`);
    }catch(error){
        console.error('Erro ao conectar a API', error);
        alert('Erro ao registrar, tente novamente')
    }
}