async function pokeapi() {

    let idj = document.getElementById('id').value;


    let id = idj ? idj : 25;

    let url = `https://pokeapi.co/api/v2/pokemon/${id}`; 


    let response = await fetch(url, {
        method: "GET"
    });


    if (response.ok) {
        let data = await response.json();

        document.getElementById('nome').innerHTML = data.name;
        document.getElementById('idade').innerHTML = data.id;

        let front = true;


        document.getElementById('img').src = data.sprites.front_default;

        function mudarPosicao() {
            front = !front;

            if (front) {
                document.getElementById('img').src = data.sprites.front_default;
            } else {
                document.getElementById('img').src = data.sprites.back_default;
            }
        }

        document.getElementById('button').addEventListener('click', mudarPosicao);
    } else {
        alert('Pokémon não encontrado!');
    }
}

pokeapi()
