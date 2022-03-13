/* --- 03_Primera Entrega Del Proyecto Final --- */

class Pokemon {
    constructor (id, pokemon, tipoPrimario, tipoSecundario) {
        this.id = parseInt(id);
        this.pokemon = pokemon.toUpperCase();
        this.tipoPrimario = tipoPrimario.toUpperCase();
        this.tipoSecundario = tipoSecundario.toUpperCase();
        this.visto = false;
        this.atrapado = false;
    }

    pokeVisto() {
        this.visto = true;
    }

    pokeAtrapado() {
        this.atrapado = true;
    }
}

const arrayPokedex = [ 
    {id: 1, pokemon: "Bulbasaur", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 2, pokemon: "Ivysaur", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 3, pokemon: "Venusaur", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 4, pokemon: "Charmander", tipoPrimario: "Fuego", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 5, pokemon: "Charmeleon", tipoPrimario: "Fuego", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 6, pokemon: "Chariazard", tipoPrimario: "Fuego", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 7, pokemon: "Squirtle", tipoPrimario: "Agua", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 8, pokemon: "Wartortle", tipoPrimario: "Agua", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 9, pokemon: "Blastoise", tipoPrimario: "Agua", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 10, pokemon: "Caterpie", tipoPrimario: "Bicho", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 11, pokemon: "Metapod", tipoPrimario: "Bicho", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 12, pokemon: "Buttertfree", tipoPrimario: "Bicho", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 13, pokemon: "Weedle", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 14, pokemon: "Kakuna", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 15, pokemon: "Beedrill", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 16, pokemon: "Pidgey", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 17, pokemon: "Pidgeotto", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 18, pokemon: "Pidgeot", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 19, pokemon: "Rattata", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 20, pokemon: "Raticate", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 21, pokemon: "Spearow", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 22, pokemon: "Fearow", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 23, pokemon: "Ekans", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 24, pokemon: "Arbok", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 25, pokemon: "Pikachu", tipoPrimario: "Electrico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 26, pokemon: "Raichu", tipoPrimario: "Electrico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 27, pokemon: "Sandshrew", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 28, pokemon: "Sandslash", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 29, pokemon: "NidoranHembra", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 30, pokemon: "Nidorina", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 31, pokemon: "Nidoqueen", tipoPrimario: "Veneno", tipoSecundario: "Tierra", visto: false, atrapado: false},
    {id: 32, pokemon: "NidoranMacho", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 33, pokemon: "Nidorino", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 34, pokemon: "Nidoking", tipoPrimario: "Veneno", tipoSecundario: "Tierra", visto: false, atrapado: false},
    {id: 35, pokemon: "Clefairy", tipoPrimario: "Hada", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 36, pokemon: "Clefable", tipoPrimario: "Hada", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 37, pokemon: "Vulpix", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 38, pokemon: "Ninetales", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 39, pokemon: "Jigglypuff", tipoPrimario: "Normal", tipoSecundario: "Hada", visto: false, atrapado: false},
    {id: 40, pokemon: "Wigglytuff", tipoPrimario: "Normal", tipoSecundario: "Hada", visto: false, atrapado: false},
    {id: 41, pokemon: "Zubat", tipoPrimario: "Veneno", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 42, pokemon: "Golbat", tipoPrimario: "Veneno", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 43, pokemon: "Oddish", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 44, pokemon: "Gloom", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 45, pokemon: "Vileplume", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 46, pokemon: "Paras", tipoPrimario: "Bicho", tipoSecundario: "Planta", visto: false, atrapado: false},
    {id: 47, pokemon: "Parasect", tipoPrimario: "Bicho", tipoSecundario: "Planta", visto: false, atrapado: false},
    {id: 48, pokemon: "Venonat", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 49, pokemon: "Venomoth", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 50, pokemon: "Diglett", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 51, pokemon: "Dugtrio", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 52, pokemon: "Meowth", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 53, pokemon: "Persian", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 54, pokemon: "Psyduck", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 55, pokemon: "Golduck", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 56, pokemon: "Mankey", tipoPrimario: "Lucha", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 57, pokemon: "Primeape", tipoPrimario: "Lucha", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 58, pokemon: "Growlithe", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 59, pokemon: "Arcanine", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 60, pokemon: "Poliwag", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 61, pokemon: "Poliwhirl", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 62, pokemon: "Poliwrath", tipoPrimario: "Agua", tipoSecundario: "Lucha", visto: false, atrapado: false},
    {id: 63, pokemon: "Abra", tipoPrimario: "Psíquico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 64, pokemon: "Kadabra", tipoPrimario: "Psíquico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 65, pokemon: "Alakazam", tipoPrimario: "Psíquico", tipoSecundario: "None", visto: false, atrapado: false},
];

function encontrarListar (find, propiedad) {
    let arrayTipo = arrayPokedex.filter(pokemon => pokemon[propiedad] === find);
    for (const pokemon of arrayTipo) {
        console.log("Nº: " + pokemon.id);
        console.log("Pokemon: " + pokemon.pokemon);
        console.log("Tipo Primario: " + pokemon.tipoPrimario);
        console.log("Tipo Secundario: " + pokemon.tipoSecundario);
        console.log("---------------------------")
    }; 
}

function registrar (find, name, propiedad) {
    for (const pokemon of arrayPokedex) {
        let searching = pokemon[name];
        if (searching === find) {
            switch (propiedad) {
                case "visto":
                    console.log("TODAVIA NO PUDE CORREGIR ESTE ERROR");
                    pokemon.pokeVisto();
                    break;
                case "atrapado":
                    console.log("TODAVIA NO PUDE CORREGIR ESTE ERROR");
                    pokemon.pokeAtrapado();
                    break;
            } 
            console.log("Nº: " + pokemon.id);
            console.log("Pokemon: " + pokemon.pokemon);
            console.log("Tipo Primario: " + pokemon.tipoPrimario);
            console.log("Tipo Secundario: " + pokemon.tipoSecundario);
            console.log("Visto: " + pokemon.visto);
            console.log("Atrapado: " + pokemon.atrapado);
            console.log("---------------------------")
        }
    };
}

let opciones = "1234567"
let nombre = prompt("Bienvenido al proyecto pokedex, cual es tu nombre?");
let opcion = prompt(`Ok ${nombre}, comencemos, esta version de la pokedex cuenta con ${arrayPokedex.length} pokemons, y las opciones son las siguientes: 
        
                        1: Buscar por nombre 
                        2: Buscar por numero
                        3: Listar por tipoPrimario 
                        4: Listar por tipoSecundario 
                        5: Listarlos a todos
                        6: Registrar Visto
                        7: Registrar Atrapado
        
                        que quieres hacer?`);
        
if (opciones.indexOf(opcion,0) != -1) {
    switch (opcion) {
        case "1":
            let nombre = prompt("Ingrese el nombre del pokemon");
            encontrarListar (nombre, "pokemon");
            break;
        case "2":
            let id = parseInt(prompt("Ingrese el numero del pokemon"));
            encontrarListar (id, "id");
            break;
        case "3":
            let tipoPrimario = prompt("Ingrese el tipoPrimario");
            encontrarListar (tipoPrimario, "tipoPrimario");
            break;
        case "4":
            let tipoSecundario = prompt("Ingrese el tipoSecundario");
            encontrarListar (tipoSecundario, "tipoSecundario");
            break;
        case "5":
            for (const pokemon of arrayPokedex) {
                console.log(pokemon.id);
                console.log("Pokemon: " + pokemon.pokemon);
                console.log("Tipo Primario: " + pokemon.tipoPrimario);
                console.log("Tipo Secundario: " + pokemon.tipoSecundario);
                console.log("---------------------------")
            }; 
            break;
        case "6":
            let nombre2 = prompt("Ingrese el nombre del pokemon");
            registrar (nombre2, "pokemon", "visto");
            break;
        case "7":
            let nombre3 = prompt("Ingrese el nombre del pokemon");
            registrar (nombre3, "pokemon", "atrapado");
            break;
        default:
            break;
    }
}

/******   */

/* --- 03_Primera Entrega Del Proyecto Final --- */

class Pokemon {
    constructor (id, pokemon, tipoPrimario, tipoSecundario) {
        this.id = parseInt(id);
        this.pokemon = pokemon.toUpperCase();
        this.tipoPrimario = tipoPrimario.toUpperCase();
        this.tipoSecundario = tipoSecundario.toUpperCase();
        this.visto = false;
        this.atrapado = false;
    }

    actualizaId() {
        this.id = ;
    }

    pokeVisto() {
        this.visto = true;
    }

    pokeAtrapado() {
        this.atrapado = true;
    }
}

const arrayPokedex = [ 
    {id: 1, pokemon: "Bulbasaur", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 2, pokemon: "Ivysaur", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 3, pokemon: "Venusaur", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 4, pokemon: "Charmander", tipoPrimario: "Fuego", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 5, pokemon: "Charmeleon", tipoPrimario: "Fuego", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 6, pokemon: "Chariazard", tipoPrimario: "Fuego", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 7, pokemon: "Squirtle", tipoPrimario: "Agua", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 8, pokemon: "Wartortle", tipoPrimario: "Agua", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 9, pokemon: "Blastoise", tipoPrimario: "Agua", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 10, pokemon: "Caterpie", tipoPrimario: "Bicho", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 11, pokemon: "Metapod", tipoPrimario: "Bicho", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 12, pokemon: "Buttertfree", tipoPrimario: "Bicho", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 13, pokemon: "Weedle", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 14, pokemon: "Kakuna", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 15, pokemon: "Beedrill", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 16, pokemon: "Pidgey", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 17, pokemon: "Pidgeotto", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 18, pokemon: "Pidgeot", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 19, pokemon: "Rattata", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 20, pokemon: "Raticate", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 21, pokemon: "Spearow", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 22, pokemon: "Fearow", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 23, pokemon: "Ekans", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 24, pokemon: "Arbok", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 25, pokemon: "Pikachu", tipoPrimario: "Electrico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 26, pokemon: "Raichu", tipoPrimario: "Electrico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 27, pokemon: "Sandshrew", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 28, pokemon: "Sandslash", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 29, pokemon: "NidoranHembra", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 30, pokemon: "Nidorina", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 31, pokemon: "Nidoqueen", tipoPrimario: "Veneno", tipoSecundario: "Tierra", visto: false, atrapado: false},
    {id: 32, pokemon: "NidoranMacho", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 33, pokemon: "Nidorino", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 34, pokemon: "Nidoking", tipoPrimario: "Veneno", tipoSecundario: "Tierra", visto: false, atrapado: false},
    {id: 35, pokemon: "Clefairy", tipoPrimario: "Hada", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 36, pokemon: "Clefable", tipoPrimario: "Hada", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 37, pokemon: "Vulpix", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 38, pokemon: "Ninetales", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 39, pokemon: "Jigglypuff", tipoPrimario: "Normal", tipoSecundario: "Hada", visto: false, atrapado: false},
    {id: 40, pokemon: "Wigglytuff", tipoPrimario: "Normal", tipoSecundario: "Hada", visto: false, atrapado: false},
    {id: 41, pokemon: "Zubat", tipoPrimario: "Veneno", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 42, pokemon: "Golbat", tipoPrimario: "Veneno", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 43, pokemon: "Oddish", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 44, pokemon: "Gloom", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 45, pokemon: "Vileplume", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 46, pokemon: "Paras", tipoPrimario: "Bicho", tipoSecundario: "Planta", visto: false, atrapado: false},
    {id: 47, pokemon: "Parasect", tipoPrimario: "Bicho", tipoSecundario: "Planta", visto: false, atrapado: false},
    {id: 48, pokemon: "Venonat", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 49, pokemon: "Venomoth", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 50, pokemon: "Diglett", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 51, pokemon: "Dugtrio", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 52, pokemon: "Meowth", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 53, pokemon: "Persian", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 54, pokemon: "Psyduck", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 55, pokemon: "Golduck", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 56, pokemon: "Mankey", tipoPrimario: "Lucha", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 57, pokemon: "Primeape", tipoPrimario: "Lucha", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 58, pokemon: "Growlithe", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 59, pokemon: "Arcanine", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 60, pokemon: "Poliwag", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 61, pokemon: "Poliwhirl", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 62, pokemon: "Poliwrath", tipoPrimario: "Agua", tipoSecundario: "Lucha", visto: false, atrapado: false},
    {id: 63, pokemon: "Abra", tipoPrimario: "Psíquico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 64, pokemon: "Kadabra", tipoPrimario: "Psíquico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 65, pokemon: "Alakazam", tipoPrimario: "Psíquico", tipoSecundario: "None", visto: false, atrapado: false},
];

function encontrarListar (find, propiedad) {
    let arrayTipo = arrayPokedex.filter(pokemon => pokemon[propiedad] === find);
    for (const pokemon of arrayTipo) {
        console.log("Nº: " + pokemon.id);
        console.log("Pokemon: " + pokemon.pokemon);
        console.log("Tipo Primario: " + pokemon.tipoPrimario);
        console.log("Tipo Secundario: " + pokemon.tipoSecundario);
        console.log("---------------------------")
    }; 
}

function actualizarPokemon (find, propiedad) {
    for (const pokemon of arrayPokedex) {
        let searching = Pokemon[pokemon];
        if (searching === find) {
            actualizaId(parseint(prompt("Ingrese nueva ID del Pokemon")));
            console.log("Nº: " + pokemon.id);
            console.log("Pokemon: " + pokemon.pokemon);
            console.log("Tipo Primario: " + pokemon.tipoPrimario);
            console.log("Tipo Secundario: " + pokemon.tipoSecundario);
            console.log("Visto: " + pokemon.visto);
            console.log("Atrapado: " + pokemon.atrapado);
            console.log("---------------------------")
        }
    };
}

let opciones = "1234567"
let security = false;
let nombreUsr = prompt("Bienvenido al proyecto pokedex, cual es tu nombre?");
let opcionUsr = prompt(`Ok ${nombreUsr}, comencemos, esta version de la pokedex cuenta con ${arrayPokedex.length} pokemons, y las opciones son las siguientes: 
        
                        1: Buscar por nombre 
                        2: Buscar por numero
                        3: Listar por tipoPrimario 
                        4: Listar por tipoSecundario 
                        5: Listarlos a todos

Hola profesor Oak!

                        6: Verificacion de seguridad
                        7: Actualizar Informacion de un pokemon en especifico
                        8: Ingresar nuevo pokemon

                        que quieres hacer?`);

if (opciones.indexOf(opcionUsr,0) != -1) {
    switch (opcionUsr) {
        case "1":
            let nombrePoke = prompt("Ingrese el nombre del pokemon");
            encontrarListar (nombrePoke, "pokemon");
            break;
        case "2":
            let id = parseInt(prompt("Ingrese el numero del pokemon"));
            encontrarListar (id, "id");
            break;
        case "3":
            let tipoPrimario = prompt("Ingrese el tipoPrimario");
            encontrarListar (tipoPrimario, "tipoPrimario");
            break;
        case "4":
            let tipoSecundario = prompt("Ingrese el tipoSecundario");
            encontrarListar (tipoSecundario, "tipoSecundario");
            break;
        case "5":
            for (const pokemon of arrayPokedex) {
                console.log(pokemon.id);
                console.log("Pokemon: " + pokemon.pokemon);
                console.log("Tipo Primario: " + pokemon.tipoPrimario);
                console.log("Tipo Secundario: " + pokemon.tipoSecundario);
                console.log("---------------------------")
            }; 
            break;
        case "6":
            while (security === false) {
                let nombreSec = prompt("Ingrese su nombre profesor Oak")
                if (nombreSec.toUpperCase() === "OAK") {
                    security = true;
                } else {
                    alert("Parece que ustede no es el profesor Oak... alguien se olvido la puerta abierta otra vez");
                }
            }
            break;
        case "7":
            let nombrePoke = prompt("Ingrese el nombre del pokemon");
            actualizarPokemon (nombrePoke, "pokemon");
            break;
        case "8":
            break;
    }
}