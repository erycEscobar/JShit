/* --- 02_IncorporarArrays --- */

const pokedex = [ 
    {id: 001, pokemon: "Bulbasaur", tipoPrimario: "Planta", tipoSecundario: "Veneno"},
    {id: 002, pokemon: "Ivysaur", tipoPrimario: "Planta", tipoSecundario: "Veneno"},
    {id: 003, pokemon: "Venusaur", tipoPrimario: "Planta", tipoSecundario: "Veneno"},
    {id: 004, pokemon: "Charmander", tipoPrimario: "Fuego", tipoSecundario: "none"},
    {id: 005, pokemon: "Charmeleon", tipoPrimario: "Fuego", tipoSecundario: "none"},
    {id: 006, pokemon: "Chariazard", tipoPrimario: "Fuego", tipoSecundario: "Volador"},
    {id: 007, pokemon: "Squirtle", tipoPrimario: "Agua", tipoSecundario: "none"},
    {id: 008, pokemon: "Wartortle", tipoPrimario: "Agua", tipoSecundario: "none"},
    {id: 009, pokemon: "Blastoise", tipoPrimario: "Agua", tipoSecundario: "none"},
    {id: 010, pokemon: "Caterpie", tipoPrimario: "Bicho", tipoSecundario: "none"},
    {id: 011, pokemon: "Metapod", tipoPrimario: "Bicho", tipoSecundario: "none"},
    {id: 012, pokemon: "Buttertfree", tipoPrimario: "Bicho", tipoSecundario: "Volador"},
    {id: 013, pokemon: "Weedle", tipoPrimario: "Bicho", tipoSecundario: "Veneno"},
    {id: 014, pokemon: "Kakuna", tipoPrimario: "Bicho", tipoSecundario: "Veneno"},
    {id: 015, pokemon: "Beedrill", tipoPrimario: "Bicho", tipoSecundario: "Veneno"},
    {id: 016, pokemon: "Pidgey", tipoPrimario: "Normal", tipoSecundario: "Volador"},
    {id: 017, pokemon: "Pidgeotto", tipoPrimario: "Normal", tipoSecundario: "Volador"},
    {id: 018, pokemon: "Pidgeot", tipoPrimario: "Normal", tipoSecundario: "Volador"},
    {id: 019, pokemon: "Rattata", tipoPrimario: "Normal", tipoSecundario: "None"},
    {id: 020, pokemon: "Raticate", tipoPrimario: "Normal", tipoSecundario: "None"},
    {id: 021, pokemon: "Spearow", tipoPrimario: "Normal", tipoSecundario: "Volador"},
    {id: 022, pokemon: "Fearow", tipoPrimario: "Normal", tipoSecundario: "Volador"},
    {id: 023, pokemon: "Ekans", tipoPrimario: "Veneno", tipoSecundario: "None"},
    {id: 024, pokemon: "Arbok", tipoPrimario: "Veneno", tipoSecundario: "None"},
    {id: 025, pokemon: "Pikachu", tipoPrimario: "Electrico", tipoSecundario: "None"},
    {id: 026, pokemon: "Raichu", tipoPrimario: "Electrico", tipoSecundario: "None"},
    {id: 027, pokemon: "Sandshrew", tipoPrimario: "Tierra", tipoSecundario: "None"},
    {id: 028, pokemon: "Sandslash", tipoPrimario: "Tierra", tipoSecundario: "None"},
    {id: 029, pokemon: "NidoranHembra", tipoPrimario: "Veneno", tipoSecundario: "None"},
    {id: 030, pokemon: "Nidorina", tipoPrimario: "Veneno", tipoSecundario: "None"},
    {id: 031, pokemon: "Nidoqueen", tipoPrimario: "Veneno", tipoSecundario: "Tierra"},
    {id: 032, pokemon: "NidoranMacho", tipoPrimario: "Veneno", tipoSecundario: "None"},
    {id: 033, pokemon: "Nidorino", tipoPrimario: "Veneno", tipoSecundario: "None"},
    {id: 034, pokemon: "Nidoking", tipoPrimario: "Veneno", tipoSecundario: "Tierra"},
    {id: 035, pokemon: "Clefairy", tipoPrimario: "Hada", tipoSecundario: "None"},
    {id: 036, pokemon: "Clefable", tipoPrimario: "Hada", tipoSecundario: "None"},
    {id: 037, pokemon: "Vulpix", tipoPrimario: "Fuego", tipoSecundario: "None"},
    {id: 038, pokemon: "Ninetales", tipoPrimario: "Fuego", tipoSecundario: "None"},
    {id: 039, pokemon: "Jigglypuff", tipoPrimario: "Normal", tipoSecundario: "Hada"},
    {id: 040, pokemon: "Wigglytuff", tipoPrimario: "Normal", tipoSecundario: "Hada"},
    {id: 041, pokemon: "Zubat", tipoPrimario: "Veneno", tipoSecundario: "Volador"},
    {id: 042, pokemon: "Golbat", tipoPrimario: "Veneno", tipoSecundario: "Volador"},
    {id: 043, pokemon: "Oddish", tipoPrimario: "Planta", tipoSecundario: "Veneno"},
    {id: 044, pokemon: "Gloom", tipoPrimario: "Planta", tipoSecundario: "Veneno"},
    {id: 045, pokemon: "Vileplume", tipoPrimario: "Planta", tipoSecundario: "Veneno"},
    {id: 046, pokemon: "Paras", tipoPrimario: "Bicho", tipoSecundario: "Planta"},
    {id: 047, pokemon: "Parasect", tipoPrimario: "Bicho", tipoSecundario: "Planta"},
    {id: 048, pokemon: "Venonat", tipoPrimario: "Bicho", tipoSecundario: "Veneno"},
    {id: 049, pokemon: "Venomoth", tipoPrimario: "Bicho", tipoSecundario: "Veneno"},
    {id: 050, pokemon: "Diglett", tipoPrimario: "Tierra", tipoSecundario: "None"},
    {id: 051, pokemon: "Dugtrio", tipoPrimario: "Tierra", tipoSecundario: "None"},
    {id: 052, pokemon: "Meowth", tipoPrimario: "Normal", tipoSecundario: "None"},
    {id: 053, pokemon: "Persian", tipoPrimario: "Normal", tipoSecundario: "None"},
    {id: 054, pokemon: "Psyduck", tipoPrimario: "Agua", tipoSecundario: "None"},
    {id: 055, pokemon: "Golduck", tipoPrimario: "Agua", tipoSecundario: "None"},
    {id: 056, pokemon: "Mankey", tipoPrimario: "Lucha", tipoSecundario: "None"},
    {id: 057, pokemon: "Primeape", tipoPrimario: "Lucha", tipoSecundario: "None"},
    {id: 058, pokemon: "Growlithe", tipoPrimario: "Fuego", tipoSecundario: "None"},
    {id: 059, pokemon: "Arcanine", tipoPrimario: "Fuego", tipoSecundario: "None"},
    {id: 060, pokemon: "Poliwag", tipoPrimario: "Agua", tipoSecundario: "None"},
    {id: 061, pokemon: "Poliwhirl", tipoPrimario: "Agua", tipoSecundario: "None"},
    {id: 062, pokemon: "Poliwrath", tipoPrimario: "Agua", tipoSecundario: "Lucha"},
    {id: 063, pokemon: "Abra", tipoPrimario: "Psíquico", tipoSecundario: "None"},
    {id: 064, pokemon: "Kadabra", tipoPrimario: "Psíquico", tipoSecundario: "None"},
    {id: 065, pokemon: "Alakazam", tipoPrimario: "Psíquico", tipoSecundario: "None"},
];

let opciones = "12345"
let nombre = prompt(`Bienvenido al proyecto pokedex, cual es tu nombre?`);
let opcion = prompt(`Ok ${nombre}, comencemos, esta version de la pokedex cuenta con 65 pokemons, y las opciones son las siguientes: 

                     1: Buscar por nombre 
                     2: Buscar por numero
                     3: Listar por tipoPrimario 
                     4: Listar por tipoSecundario 
                     5: Listarlos a todos

                     que quieres hacer?`);

function encontrarYlistar (find, propiedad) {
    for (const pokemon of pokedex) {
        let searching = pokemon[propiedad];
        if (searching === find) {
            console.log(pokemon.id);
            console.log(pokemon.pokemon);
            console.log(pokemon.tipoPrimario);
            console.log(pokemon.tipoSecundario);
            console.log("---------------------------")
        }
    };
}

if (opciones.indexOf(opcion,0) != -1) {
    switch (opcion) {
        case "1":
            let nombre = prompt(`Ingrese el nombre del pokemon`);
            encontrarYlistar (nombre, "pokemon");
            break;
        case "2":
            let id = parseInt(prompt(`Ingrese el numero del pokemon`));
            encontrarYlistar (id, "id");
            break;
        case "3":
            let tipoPrimario = prompt(`Ingrese el tipoPrimario`);
            encontrarYlistar (tipoPrimario, "tipoPrimario")
            break;
        case "4":
            let tipoSecundario = prompt(`Ingrese el tipoSecundario`);
            encontrarYlistar (tipoSecundario, "tipoSecundario")
            break;
        case "5":
            for (const pokemon of pokedex) {
                console.log(pokemon.id);
                console.log(pokemon.pokemon);
                console.log(pokemon.tipoPrimario);
                console.log(pokemon.tipoSecundario);
                console.log("---------------------------")
            };
            break;
        default:
            break;
    }
}
