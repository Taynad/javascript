async function fetchData(){
    try{
        const response = await fetch ('http://localhost:8081/api/getData');
        if (!response.ok){
            throw new Error ("Network response was not ok " + response.statusText);
        }

        const data = await response.text();
        document.getElementById('result').innerText = data;
    }catch(error){
        console.error('Fetch error: ', error);
        document.getElementById('result').innerText = 'Erro ao buscar dados;'
    }
}