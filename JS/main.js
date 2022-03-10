/* --- 03_Primera Entrega Del Proyecto Final --- */

class Pokemon {

    constructor (id, pokemon, tipoPrimario, tipoSecundario) {
        this.id = parseInt (id);
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
    {id: 001, pokemon: "Bulbasaur", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 002, pokemon: "Ivysaur", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 003, pokemon: "Venusaur", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 004, pokemon: "Charmander", tipoPrimario: "Fuego", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 005, pokemon: "Charmeleon", tipoPrimario: "Fuego", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 006, pokemon: "Chariazard", tipoPrimario: "Fuego", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 007, pokemon: "Squirtle", tipoPrimario: "Agua", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 008, pokemon: "Wartortle", tipoPrimario: "Agua", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 009, pokemon: "Blastoise", tipoPrimario: "Agua", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 010, pokemon: "Caterpie", tipoPrimario: "Bicho", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 011, pokemon: "Metapod", tipoPrimario: "Bicho", tipoSecundario: "none", visto: false, atrapado: false},
    {id: 012, pokemon: "Buttertfree", tipoPrimario: "Bicho", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 013, pokemon: "Weedle", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 014, pokemon: "Kakuna", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 015, pokemon: "Beedrill", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 016, pokemon: "Pidgey", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 017, pokemon: "Pidgeotto", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 018, pokemon: "Pidgeot", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 019, pokemon: "Rattata", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 020, pokemon: "Raticate", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 021, pokemon: "Spearow", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 022, pokemon: "Fearow", tipoPrimario: "Normal", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 023, pokemon: "Ekans", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 024, pokemon: "Arbok", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 025, pokemon: "Pikachu", tipoPrimario: "Electrico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 026, pokemon: "Raichu", tipoPrimario: "Electrico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 027, pokemon: "Sandshrew", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 028, pokemon: "Sandslash", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 029, pokemon: "NidoranHembra", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 030, pokemon: "Nidorina", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 031, pokemon: "Nidoqueen", tipoPrimario: "Veneno", tipoSecundario: "Tierra", visto: false, atrapado: false},
    {id: 032, pokemon: "NidoranMacho", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 033, pokemon: "Nidorino", tipoPrimario: "Veneno", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 034, pokemon: "Nidoking", tipoPrimario: "Veneno", tipoSecundario: "Tierra", visto: false, atrapado: false},
    {id: 035, pokemon: "Clefairy", tipoPrimario: "Hada", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 036, pokemon: "Clefable", tipoPrimario: "Hada", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 037, pokemon: "Vulpix", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 038, pokemon: "Ninetales", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 039, pokemon: "Jigglypuff", tipoPrimario: "Normal", tipoSecundario: "Hada", visto: false, atrapado: false},
    {id: 040, pokemon: "Wigglytuff", tipoPrimario: "Normal", tipoSecundario: "Hada", visto: false, atrapado: false},
    {id: 041, pokemon: "Zubat", tipoPrimario: "Veneno", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 042, pokemon: "Golbat", tipoPrimario: "Veneno", tipoSecundario: "Volador", visto: false, atrapado: false},
    {id: 043, pokemon: "Oddish", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 044, pokemon: "Gloom", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 045, pokemon: "Vileplume", tipoPrimario: "Planta", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 046, pokemon: "Paras", tipoPrimario: "Bicho", tipoSecundario: "Planta", visto: false, atrapado: false},
    {id: 047, pokemon: "Parasect", tipoPrimario: "Bicho", tipoSecundario: "Planta", visto: false, atrapado: false},
    {id: 048, pokemon: "Venonat", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 049, pokemon: "Venomoth", tipoPrimario: "Bicho", tipoSecundario: "Veneno", visto: false, atrapado: false},
    {id: 050, pokemon: "Diglett", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 051, pokemon: "Dugtrio", tipoPrimario: "Tierra", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 052, pokemon: "Meowth", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 053, pokemon: "Persian", tipoPrimario: "Normal", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 054, pokemon: "Psyduck", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 055, pokemon: "Golduck", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 056, pokemon: "Mankey", tipoPrimario: "Lucha", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 057, pokemon: "Primeape", tipoPrimario: "Lucha", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 058, pokemon: "Growlithe", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 059, pokemon: "Arcanine", tipoPrimario: "Fuego", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 060, pokemon: "Poliwag", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 061, pokemon: "Poliwhirl", tipoPrimario: "Agua", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 062, pokemon: "Poliwrath", tipoPrimario: "Agua", tipoSecundario: "Lucha", visto: false, atrapado: false},
    {id: 063, pokemon: "Abra", tipoPrimario: "Psíquico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 064, pokemon: "Kadabra", tipoPrimario: "Psíquico", tipoSecundario: "None", visto: false, atrapado: false},
    {id: 065, pokemon: "Alakazam", tipoPrimario: "Psíquico", tipoSecundario: "None", visto: false, atrapado: false},
];

let opciones = "12345"
let nombre = prompt("Bienvenido al proyecto pokedex, cual es tu nombre?");
let opcion = prompt(`Ok ${nombre}, comencemos, esta version de la pokedex cuenta con 65 pokemons, y las opciones son las siguientes: 

                     1: Buscar por nombre 
                     2: Buscar por numero
                     3: Listar por tipoPrimario 
                     4: Listar por tipoSecundario 
                     5: Listarlos a todos

                     que quieres hacer?`);

function encontrarListar (find, propiedad) {
    for (const pokemon of arrayPokedex) {
        let searching = pokemon[propiedad];
        if (searching === find) {
            console.log("Nº: " + pokemon.id);
            console.log("Pokemon: " + pokemon.pokemon);
            console.log("Tipo Primario: " + pokemon.tipoPrimario);
            console.log("Tipo Secundario: " + pokemon.tipoSecundario);
            console.log("---------------------------")
        }
    };
}

function listarTipo (find, propiedad) {
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
    for (const pokemon of tempPokedex) {
        let searching = pokemon[name];
        if (searching === find) {
            switch (propiedad) {
                case "visto":
                    pokemon.pokeVisto();
                    break;
                case "atrapado":
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
            listarTipo (tipoPrimario, "tipoPrimario")
            break;
        case "4":
            let tipoSecundario = prompt("Ingrese el tipoSecundario");
            listarTipo (tipoSecundario, "tipoSecundario")
            break;
        case "5":
            for (const pokemon of arrayPokedex) {
                console.log("Nº: " + pokemon.id);
                console.log("Pokemon: " + pokemon.pokemon);
                console.log("Tipo Primario: " + pokemon.tipoPrimario);
                console.log("Tipo Secundario: " + pokemon.tipoSecundario);
                console.log("---------------------------")
            }; 
            break;
        /*    
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
        */
    }
}
