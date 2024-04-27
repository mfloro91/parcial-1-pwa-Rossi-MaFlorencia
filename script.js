// me guardo la url de la que quiero traer datos
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100";
const urlPokemonPorId = "https://pokeapi.co/api/v2/pokemon/";


// Hago un array para pushear primeros datos de los pokemones
idPokemones = [];

// Hago una función que consulta con fetch datos básicos de 100 pokemones

const requestPokemons = () => {

    // Voy a la URL general y me traigo nombre del pokemon

    fetch(urlPokemon)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            const resultados = respuesta.results;

            // Renderizo respuestas usando la función mostrarCard
            // Me guardo URL en array 

            resultados.forEach(element => {
                const id = (element["url"].slice(34, -1));

                //idPokemones.push(id);

                fetch(urlPokemonPorId + id)
                    .then(respuestaDetalles => respuestaDetalles.json())
                    .then(respuestaDetalles => {
                        const resultadosDetalles = respuestaDetalles;
                        //console.log(resultadosDetalles);
                        const habilidad = resultadosDetalles[`abilities`][0][`ability`][`name`];
                        const img = resultadosDetalles[`sprites`][`front_shiny`];
                        console.log(img);
                        mostrarCard(element, img, habilidad);

                    });

            });
        });

}

requestPokemons();

// Renderizo una card

const mostrarCard = (pokemon, img, habilidad) => {
    let contenedorCards = document.querySelector(".cardContainer");

    let contenedorCol = document.createElement("div");
    contenedorCol.setAttribute("class", "col-12 col-md-6 col-lg-4 col-xl-3 p-1");

    let contenedorCard = document.createElement("div");
    contenedorCard.setAttribute("class", "card cardPoke");
    contenedorCard.setAttribute("style", "width: 18rem;");

    let divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    let divRow = document.createElement("div");
    divRow.setAttribute("class", "row");

    let nombrePoke = document.createElement("h3");
    nombrePoke.setAttribute("class", "card-text col-9 h3");
    nombrePoke.innerText = `${pokemon.name}`


    let idPoke = document.createElement("p");
    idPoke.setAttribute("class", "card-text col-3 h5");
    idPoke.innerText = `#${pokemon.url.slice(34, -1)}`;


    let imgPoke = document.createElement("img");
    imgPoke.setAttribute(`src`, `${img}`);
    imgPoke.setAttribute(`class`, `imgCard`);
    imgPoke.setAttribute(`alt`, `Pikachu sonríe a la cámara`);

    let habilidadPoke = document.createElement("p");
    habilidadPoke.setAttribute("class", "card-text col-12 h6");
    habilidadPoke.innerText = `Habilidad: ${habilidad}`;

    let link = document.createElement("a");
    link.setAttribute("href", "pokePorId.html");
    link.setAttribute("class", "d-grid gap-2");

    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.innerText = "Ver más";

    divRow.append(nombrePoke, idPoke, imgPoke, habilidadPoke);
    divCardBody.append(divRow);
    link.append(button);
    contenedorCard.append(divCardBody, link);
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
