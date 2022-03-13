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



const arrayPokedex = [ ];

arrayPokedex.push(new Pokemon("1", "Bulbasaur", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("2", "Ivysaur", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("3", "Venusaur", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("4", "Charmander", "Fuego", "none"));
arrayPokedex.push(new Pokemon("5", "Charmeleon", "Fuego", "none"));
arrayPokedex.push(new Pokemon("6", "Chariazard", "Fuego", "Volador"));
arrayPokedex.push(new Pokemon("7", "Squirtle", "Agua", "none"));
arrayPokedex.push(new Pokemon("8", "Wartortle", "Agua", "none"));
arrayPokedex.push(new Pokemon("9", "Blastoise", "Agua", "none"));
arrayPokedex.push(new Pokemon("10", "Caterpie", "Bicho", "none"));
arrayPokedex.push(new Pokemon("11", "Metapod", "Bicho", "none"));
arrayPokedex.push(new Pokemon("12", "Buttertfree", "Bicho", "Volador"));
arrayPokedex.push(new Pokemon("13", "Weedle", "Bicho", "Veneno"));
arrayPokedex.push(new Pokemon("14", "Kakuna", "Bicho", "Veneno"));
arrayPokedex.push(new Pokemon("15", "Beedrill", "Bicho", "Veneno"));
arrayPokedex.push(new Pokemon("16", "Pidgey", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("17", "Pidgeotto", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("18", "Pidgeot", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("19", "Rattata", "Normal", "None"));
arrayPokedex.push(new Pokemon("20", "Raticate", "Normal", "None"));
arrayPokedex.push(new Pokemon("21", "Spearow", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("22", "Fearow", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("23", "Ekans", "Veneno", "None"));
arrayPokedex.push(new Pokemon("24", "Arbok", "Veneno", "None"));
arrayPokedex.push(new Pokemon("25", "Pikachu", "Electrico", "None"));
arrayPokedex.push(new Pokemon("26", "Raichu", "Electrico", "None"));
arrayPokedex.push(new Pokemon("27", "Sandshrew", "Tierra", "None"));
arrayPokedex.push(new Pokemon("28", "Sandslash", "Tierra", "None"));
arrayPokedex.push(new Pokemon("29", "NidoranHembra", "Veneno", "None"));
arrayPokedex.push(new Pokemon("30", "Nidorina", "Veneno", "None"));
arrayPokedex.push(new Pokemon("31", "Nidoqueen", "Veneno", "Tierra"));
arrayPokedex.push(new Pokemon("32", "NidoranMacho", "Veneno", "None"));
arrayPokedex.push(new Pokemon("33", "Nidorino", "Veneno", "None"));
arrayPokedex.push(new Pokemon("34", "Nidoking", "Veneno", "Tierra"));
arrayPokedex.push(new Pokemon("35", "Clefairy", "Hada", "None"));
arrayPokedex.push(new Pokemon("36", "Clefable", "Hada", "None"));
arrayPokedex.push(new Pokemon("37", "Vulpix", "Fuego", "None"));
arrayPokedex.push(new Pokemon("38", "Ninetales", "Fuego", "None"));
arrayPokedex.push(new Pokemon("39", "Jigglypuff", "Normal", "Hada"));
arrayPokedex.push(new Pokemon("40", "Wigglytuff", "Normal", "Hada"));
arrayPokedex.push(new Pokemon("41", "Zubat", "Veneno", "Volador"));
arrayPokedex.push(new Pokemon("42", "Golbat", "Veneno", "Volador"));
arrayPokedex.push(new Pokemon("43", "Oddish", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("44", "Gloom", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("45", "Vileplume", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("46", "Paras", "Bicho", "Planta"));
arrayPokedex.push(new Pokemon("47", "Parasect", "Bicho", "Planta"));
arrayPokedex.push(new Pokemon("48", "Venonat", "Bicho", "Veneno"));
arrayPokedex.push(new Pokemon("49", "Venomoth", "Bicho", "Veneno"));
arrayPokedex.push(new Pokemon("50", "Diglett", "Tierra", "None"));
arrayPokedex.push(new Pokemon("51", "Dugtrio", "Tierra", "None"));
arrayPokedex.push(new Pokemon("52", "Meowth", "Normal", "None"));
arrayPokedex.push(new Pokemon("53", "Persian", "Normal", "None"));
arrayPokedex.push(new Pokemon("54", "Psyduck", "Agua", "None"));
arrayPokedex.push(new Pokemon("55", "Golduck", "Agua", "None"));
arrayPokedex.push(new Pokemon("56", "Mankey", "Lucha", "None"));
arrayPokedex.push(new Pokemon("57", "Primeape", "Lucha", "None"));
arrayPokedex.push(new Pokemon("58", "Growlithe", "Fuego", "None"));
arrayPokedex.push(new Pokemon("59", "Arcanine", "Fuego", "None"));
arrayPokedex.push(new Pokemon("60", "Poliwag", "Agua", "None"));
arrayPokedex.push(new Pokemon("61", "Poliwhirl", "Agua", "None"));
arrayPokedex.push(new Pokemon("62", "Poliwrath", "Agua", "Lucha"));
arrayPokedex.push(new Pokemon("63", "Abra", "Psíquico", "None"));
arrayPokedex.push(new Pokemon("64", "Kadabra", "Psíquico", "None"));
arrayPokedex.push(new Pokemon("65", "Alakazam", "Psíquico", "None"));



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



function nuevoPoke() {
    let newId = parseInt(prompt("Ingrese nuevo Id"));
    let newName = prompt("Ingrese nombre del Pokemon");
    let newTypeP = prompt("Ingrese tipo Primario del nuevo Pokemon");
    let newTypeS = prompt("Ingrese tipo Secundario del nuevo Pokemon");
    arrayPokedex.push(new Pokemon(newId, newName, newTypeP, newTypeS));
    
    console.log("PokedexActualizada");
    console.log(arrayPokedex);
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

                        6: Ingresar nuevo pokemon

                        que quieres hacer?`);



console.log("PokedexAnterior");
console.log(arrayPokedex);



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
            nuevoPoke();
            break;
    }
}