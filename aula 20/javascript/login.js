document.addEventListener('DOMContentLoaded', () =>{
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const regsiterButton = document.getElementById('registerButton');

    if(loginButton){
        loginButton.addEventListener('click', async () =>{
            const username = usernameInput.value;
            const password = passwordInput.value;

            try{
                const response = await fetch ('http://localhost:8000/login', {
                    method: 'POST',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify({username, password}),
                });

                if(response.ok){
                    const result = await response.text();
                    alert(`Login bem-sucedido ${result}`);
                }else{
                    alert(`Erro ao fazer login. Verifique suas credenciais`)
                }
            }catch(error){
                console.error('Erro ao conectar á API:', error);
                alert('Erro ao conectar á API.');
            }
        })
    }

    if(regsiterButton){
        regsiterButton.addEventListener('click', async () => {
            const username = usernameInput.value;
            const password = passwordInput.value;

            try{
                const response = await fetch('http://localhost:8000/register',{
                    method:'POST',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify({username, password}),
                });

                if(response.ok){
                    const result = await response.text();
                    alert(`Registro bem-sucedido ${result}`);
                }else{
                    alert('Erro ao registrar.Tente novamente.')
                }
            }catch(error){
                console.error('Erro ao conectar a API: ', error);
                alert(`Erro ao conectar a API`);
            }
        })
    }
}
);