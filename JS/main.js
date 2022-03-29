const buscador = document.querySelector('#buscador');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

function mostrar (pokemon) {
    let main = document.getElementById("main");
            let contenedor = document.createElement("div");
            contenedor.innerHTML = `<img src=${pokemon.img}></img>
                                    <h3>Nº: ${pokemon.id}</h3>
                                    <p>Nombre: ${pokemon.pokemon} </p>
                                    <p>Tipo Primario: ${pokemon.tipoPrimario}</p>
                                    <p>Tipo Secundario: ${pokemon.tipoSecundario}</p>`
                                    ;
            main.appendChild(contenedor);
}

const encontrarListar = () => {
    console.log(buscador.value);
    main.innerHTML = '';
    let texto = buscador.value.toUpperCase();
    for (let pokemon of arrayPokedex) {
        let nombre = pokemon.pokemon;
        nombre.indexOf(texto) !== -1 && mostrar(pokemon);
    }
    (main.innerHTML === '') && (main.innerHTML += '<li>Pokemon no encontrado...</li>');
}

boton.addEventListener('click', encontrarListar);
buscador.addEventListener('keyup', encontrarListar);

encontrarListar();