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
            const result = await response.json(); // Obtém a resposta em JSON
            throw new Error(result.message || "Erro desconhecido");
        }

        //processa a resposta
        const result = await response.json();
        showFeedbackMenssage(result.message, result.type); 
    }catch(error){
        console.error('Erro ao conectar a API', error);
        showFeedbackMenssage(error.message, "error");
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
            const result = await response.json(); // Obtém a resposta em JSON
            throw new Error(result.message || "Erro desconhecido");
        }

        //processa a resposta da API
        const result = await response.json();
        showFeedbackMenssage(result.message, result.type); 
    }catch(error){
        console.error('Erro ao conectar a API', error);
        showFeedbackMenssage(error.message, "error");
    }
}

function showFeedbackMenssage(message, type = 'success'){
    //obtendo o elemento do html
    const feedbackElement = document.getElementById('feedback-message');
    //define o texto da mensagem a ser exibida
    feedbackElement.textContent = message;
    //modifica a classe para incluir o tipo de classe do css se é error ou sucess
    feedbackElement.className = `feedback-message ${type}`;
    //exibe o elemento com o block
    feedbackElement.style.display = 'block';
    //função para criar um temporizador que vai executar a função, altera para none tornando invisivel
    //isso cria o efeito da mensagem desaparecer depois de 5 segundos
    setTimeout(() =>{
        feedbackElement.style.display = 'none';
    }, 5000);

}