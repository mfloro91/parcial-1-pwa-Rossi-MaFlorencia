// me guardo la url de la que quiero traer datos
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100";


// Hago un array para pushear primeros datos de los pokemones
resultadosPokemones = [];

// Hago una función que consulta con fetch datos básicos de 100 pokemones

const requestPokemons = () => {
    fetch(urlPokemon) 
    .then (respuesta => respuesta.json())
    .then(respuesta => {
        const resultados = respuesta.results;
        resultados.forEach(element => {
            mostrarCard(element);
        });
        //resultadosPokemones.push(resultados);
        //const primerResultado = resultados [0];
    })
}

requestPokemons();

// Renderizo una card

const mostrarCard = (pokemon) => {
    let contenedorCards = document.querySelector(".cardContainer");

    let contenedorCol = document.createElement("div");
    contenedorCol.setAttribute("class", "col-12 col-md-6 col-lg-3 p-0");

    let contenedorCard = document.createElement("div");
    contenedorCard.setAttribute("class", "card cardPoke");
    contenedorCard.setAttribute("style", "width: 20rem;");

    let divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    let divRow = document.createElement("div");
    divRow.setAttribute("class", "row");

    let nombrePoke = document.createElement("h3");
    nombrePoke.setAttribute("class", "card-text col-9 h3");
    nombrePoke.innerText = `${pokemon.name}`

    let idPoke = document.createElement("p");
    idPoke.setAttribute("class", "card-text col-3 h5");
    idPoke.innerText = `#01`;

    let imgPoke = document.createElement("img");
    imgPoke.setAttribute(`src`, `img/pika.png`);
    imgPoke.setAttribute(`alt`, `Pikachu sonríe a la cámara`);

    let categoriaPoke = document.createElement("p");
    categoriaPoke.setAttribute("class", "card-text col-12 h6");
    categoriaPoke.innerText = `Electricidad`;

    divRow.append(nombrePoke, idPoke, imgPoke, categoriaPoke);
    divCardBody.append(divRow);
    contenedorCard.append(divCardBody);
    contenedorCol.append(contenedorCard);
    contenedorCards.append(contenedorCol);

}


/*            <div class="card cardPoke me-2 mb-2" style="width: 20rem;">
                <div class="card-body">
                    <div class="row">
                        <p class="card-text col-9 h3"> Pikachu </p>
                        <p class="card-text col-3 h5">#01</p>
                        <img src="img/pika.png" alt="">
                        <p class="card-text col-12 h6"> Electricidad </p>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">

                        <p class="card-text col-2">1</p>
                        <p class="card-text col-6">Poder</p>
                        <p class="card-text col-4"> Tirar rayos</p>

                        <p class="card-text col-2">2</p>
                        <p class="card-text col-6">Color</p>
                        <p class="card-text col-4"> Amarillo</p>

                        <p class="card-text col-2">3</p>
                        <p class="card-text col-6">Dato</p>
                        <p class="card-text col-4"> Se ríe</p>

                    </div>
                </div>

            </div>
            */
