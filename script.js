// me guardo la url de la que quiero traer datos
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100";
const urlPokemonPorId = "https://pokeapi.co/api/v2/pokemon/";
const listaPokemones = [];

// Hago una función que consulta con fetch datos básicos de 100 pokemones

const requestPokemons = () => {

    // Voy a la URL general y me traigo nombre del pokemon y url

    fetch(urlPokemon)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            const resultados = respuesta.results;

            // Recorro cada elemento pokemon

            resultados.forEach(element => {
                
                // Me guardo el ID de cada elemento
                const id = (element["url"].slice(34, -1));        

                // Hago un fetch para cada pokemon y obtengo sus detalles
                fetch(urlPokemonPorId + id)
                    .then(respuestaDetalles => respuestaDetalles.json())
                    .then(respuestaDetalles => {
                        const resultadosDetalles = respuestaDetalles;
                        //console.log(resultadosDetalles);
                        
                        // Llamo a la función agregar a la lista (pushea cada pokemon al array de pokemones para guardar datos de manera local)
                        agregarLista(resultadosDetalles);

                        // Llamo a la función mostrar card, que renderiza un resumen de cada pokemon
                        mostrarCard(resultadosDetalles);

                    });

            });
        });

}

requestPokemons();

// Función que agrega cada pokemon a un array

function agregarLista(lista) {
    listaPokemones.push(lista);
}


// Función que renderiza una card resumida por cada pokemon


function mostrarCard (pokemon) {

    let id = pokemon[`species`][`url`].slice(42, -1);
    let name = pokemon[`species`][`name`].toUpperCase();
    let habilidad = pokemon[`abilities`][0][`ability`][`name`];
    let img = pokemon[`sprites`][`front_shiny`];

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
    nombrePoke.innerText = `${name}`;


    let idPoke = document.createElement("p");
    idPoke.setAttribute("class", "card-text col-3 h5");
    idPoke.innerText = `#${id}`;


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
    button.setAttribute("class", `btn btn-primary btnDetalles ${id}`);
    button.innerText = "Ver más";

    divRow.append(nombrePoke, idPoke, imgPoke, habilidadPoke);
    divCardBody.append(divRow);
    link.append(button);
    contenedorCard.append(divCardBody, link);
    contenedorCol.append(contenedorCard);
    contenedorCards.append(contenedorCol);

    link.addEventListener("click", () => {
        localStorage.removeItem("id");
        localStorage.setItem("id", id);
    });
    

}

