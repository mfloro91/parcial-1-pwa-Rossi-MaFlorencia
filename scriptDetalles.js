// me guardo la url de la que quiero traer datos
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100";
const urlPokemonPorId = "https://pokeapi.co/api/v2/pokemon/";
let id = localStorage.getItem("id");
let historial = localStorage.getItem("historial");
console.log(historial);




// Hago una función que consulta con fetch detalles pokemones

const requestDetallePokemons = () => {

    // Voy a la URL general y me traigo nombre del pokemon

    fetch(urlPokemonPorId + id)
        .then(respuesta => respuesta.json())
        .then(respuestaDetalles => {
            const resultadosDetalles = respuestaDetalles;
            console.log(resultadosDetalles);
            const pokemon = resultadosDetalles[`species`][`name`];
            const habilidad = resultadosDetalles[`abilities`][0][`ability`][`name`];
            const img = resultadosDetalles[`sprites`][`front_shiny`];
            const peso = resultadosDetalles[`weight`];
            const valores = [];
            for (let valor of resultadosDetalles[`types`]) {
                valores.push(valor[`type`][`name`]);
            }

            mostrarDetalles(pokemon, img, habilidad, valores, peso);


            });
}

requestDetallePokemons();


// Renderizo página detalles

const mostrarDetalles = (pokemon, img, habilidad, valores, peso) => {

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
    tituloDetalle.innerText = `Nombre: ${pokemon.toUpperCase()}`;

    let detalle1 = document.createElement("p");
    detalle1.setAttribute("class", "w-75 mt-5");
    detalle1.innerText = `ID #${id}`;

    let detalle2 = document.createElement("p");
    detalle2.setAttribute("class", "w-75");
    detalle2.innerText = `Habilidad Principal: ${habilidad}`;

    let detalle3 = document.createElement("p");
    detalle3.setAttribute("class", "w-75");
    detalle3.innerText = `Valores: ${valores[0]} y ${valores [1]}`;

    let detalle4 = document.createElement("p");
    detalle4.setAttribute("class", "w-75");
    detalle4.innerText = `Peso: ${peso}`;

    divImg.append(imgDetalle);
    divTexto.append(tituloDetalle, detalle1, detalle2, detalle3, detalle4);
    divDetalles.append(divImg, divTexto);
    contenedorDetalles.append(divDetalles);

}

