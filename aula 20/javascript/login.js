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
    const feedbackElement = document.getElementById('feedback-message');
    feedbackElement.textContent = message;
    feedbackElement.className = `feedback-message ${type}`;
    feedbackElement.style.display = 'block';
    setTimeout(() =>{
        feedbackElement.style.display = 'none';
    }, 5000);

}