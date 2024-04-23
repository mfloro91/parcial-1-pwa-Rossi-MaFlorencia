// me guardo la url de la que quiero traer datos
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100";

// Hago una función que consulta con fetch datos básicos de 100 pokemones

const requestPokemons = () => {
    fetch(urlPokemon) 
    .then (respuesta => respuesta.json())
    .then(respuesta => {
        console.log(respuesta);
    })
}


requestPokemons();
