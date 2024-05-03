// me guardo la url de la que quiero traer datos
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100";
const urlPokemonPorId = "https://pokeapi.co/api/v2/pokemon/";
let id = localStorage.getItem("id");


// Hago una función que consulta con fetch detalles pokemones


const requestDetallePokemons = () => {

    // Voy a la URL del pokemon seleccionado por ID

    fetch(urlPokemonPorId + id)
        .then(respuesta => respuesta.json())
        .then(respuestaDetalles => {
            const resultadosDetalles = respuestaDetalles;
            //console.log(resultadosDetalles);
            mostrarDetalles(resultadosDetalles);

        });
}

requestDetallePokemons();


// Renderizo página detalles

const mostrarDetalles = (pokemon) => {

    let id = pokemon[`species`][`url`].slice(42, -1);
    let name = pokemon[`species`][`name`].toUpperCase();
    let habilidad = pokemon[`abilities`][0][`ability`][`name`];
    let img = pokemon[`sprites`][`front_shiny`];
    let peso = pokemon[`weight`];
    let valores = [];
    for (let valor of pokemon[`types`]) {
        valores.push(valor[`type`][`name`]);
    }

    let contenedorDetalles = document.querySelector(".contenedorDetalles");

    let divDetalles = document.createElement("div");
    divDetalles.setAttribute("class", "d-flex flex-direction-row justify-content-center align-items-center mt-5");

    let divImg = document.createElement("div");
    divImg.setAttribute("class", "flex-direction-column");


    let imgDetalle = document.createElement("img");
    imgDetalle.setAttribute("class", "img-fluid imgDetalle");
    imgDetalle.setAttribute(`src`, `${img}`);

    let divTexto = document.createElement("div");
    divTexto.setAttribute("class", "col-12 col-lg-6  mt-5 text-lg-start ps-md-5 detalles");

    let tituloDetalle = document.createElement("h2");
    tituloDetalle.setAttribute("class", "h3");
    tituloDetalle.innerText = `Nombre: ${name}`;

    let detalle1 = document.createElement("p");
    detalle1.setAttribute("class", "w-75 mt-5");
    detalle1.innerText = `ID #${id}`;

    let detalle2 = document.createElement("p");
    detalle2.setAttribute("class", "w-75");
    detalle2.innerText = `Habilidad Principal: ${habilidad}.`;

    let detalle3 = document.createElement("p");
    detalle3.setAttribute("class", "w-75");

    if (valores.length == 2) {
        detalle3.innerText = `Valores: ${valores[0]} y ${valores[1]}.`;
    } else {
        detalle3.innerText = `Valor: ${valores[0]}.`;
    }

    let detalle4 = document.createElement("p");
    detalle4.setAttribute("class", "w-75");
    detalle4.innerText = `Peso: ${peso} kg.`;

    divImg.append(imgDetalle);
    divTexto.append(tituloDetalle, detalle1, detalle2, detalle3, detalle4);
    divDetalles.append(divImg, divTexto);
    contenedorDetalles.append(divDetalles);

}

