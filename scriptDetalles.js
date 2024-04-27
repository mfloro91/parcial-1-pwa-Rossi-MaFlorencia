// me guardo la url de la que quiero traer datos
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100";
const urlPokemonPorId = "https://pokeapi.co/api/v2/pokemon/";
id = localStorage.getItem("id");



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
            const valores = [];
            for (let valor of resultadosDetalles[`types`]) {
                valores.push(valor[`type`][`name`]);
            }
            console.log(valores);
            mostrarDetalles(pokemon, img, habilidad, valores);


            });
}

requestDetallePokemons();


// Renderizo página detalles

const mostrarDetalles = (pokemon, img, habilidad, valores) => {

    let contenedorDetalles = document.querySelector(".contenedorDetalles");

    let divDetalles = document.createElement("div");
    divDetalles.setAttribute("class", "col-12 col-lg-6 px-1  d-flex flex-direction-row justify-content-center align-items-center mt-5 m-auto");

    let divImg = document.createElement("div");
    divImg.setAttribute("class", "flex-direction-column");


    let imgDetalle = document.createElement("img");
    imgDetalle.setAttribute("class", "img-fluid imgDetalle");
    imgDetalle.setAttribute(`src`, `${img}`);

    let divTexto = document.createElement("div");
    divTexto.setAttribute("class", "col-12 col-lg-6  mt-5 text-lg-start ps-md-5 detalles");

    let tituloDetalle = document.createElement("h2");
    tituloDetalle.setAttribute("class", "h3");
    tituloDetalle.innerText = `${pokemon}`;

    let detalle1 = document.createElement("p");
    detalle1.setAttribute("class", "w-75 m-auto m-lg-0");
    detalle1.innerText = `ID #${id}`;

    let detalle2 = document.createElement("p");
    detalle2.setAttribute("class", "w-75 m-auto m-lg-0");
    detalle2.innerText = `Habilidad: ${habilidad}`;

    let detalle3 = document.createElement("p");
    detalle3.setAttribute("class", "w-75 m-auto m-lg-0");
    detalle3.innerText = `Valores: ${valores[0]} y ${valores [1]}`;

    divImg.append(imgDetalle);
    divTexto.append(tituloDetalle, detalle1, detalle2, detalle3);
    divDetalles.append(divImg, divTexto);
    contenedorDetalles.append(divDetalles);

}

