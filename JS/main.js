/* --- 03_Primera Entrega Del Proyecto Final --- */

class Pokemon {

    constructor (id, pokemon, tipoPrimario, tipoSecundario) {
        this.id = parseInt(id);
        this.pokemon = pokemon.toUpperCase();
        this.tipoPrimario = tipoPrimario.toUpperCase();
        this.tipoSecundario = tipoSecundario.toUpperCase();
        this.visto = false;
        this.atrapado = false;
        this.img = `./IMG/pokePictures/${id}.png`;
    }

    pokeVisto() {
        this.visto = true;
    }

    pokeAtrapado() {
        this.atrapado = true;
    }

}



const arrayPokedex = [];

arrayPokedex.push(new Pokemon("001", "Bulbasaur", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("002", "Ivysaur", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("003", "Venusaur", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("004", "Charmander", "Fuego", "none"));
arrayPokedex.push(new Pokemon("005", "Charmeleon", "Fuego", "none"));
arrayPokedex.push(new Pokemon("006", "Chariazard", "Fuego", "Volador"));
arrayPokedex.push(new Pokemon("007", "Squirtle", "Agua", "none"));
arrayPokedex.push(new Pokemon("008", "Wartortle", "Agua", "none"));
arrayPokedex.push(new Pokemon("009", "Blastoise", "Agua", "none"));
arrayPokedex.push(new Pokemon("010", "Caterpie", "Bicho", "none"));
arrayPokedex.push(new Pokemon("011", "Metapod", "Bicho", "none"));
arrayPokedex.push(new Pokemon("012", "Buttertfree", "Bicho", "Volador"));
arrayPokedex.push(new Pokemon("013", "Weedle", "Bicho", "Veneno"));
arrayPokedex.push(new Pokemon("014", "Kakuna", "Bicho", "Veneno"));
arrayPokedex.push(new Pokemon("015", "Beedrill", "Bicho", "Veneno"));
arrayPokedex.push(new Pokemon("016", "Pidgey", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("017", "Pidgeotto", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("018", "Pidgeot", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("019", "Rattata", "Normal", "None"));
arrayPokedex.push(new Pokemon("020", "Raticate", "Normal", "None"));
arrayPokedex.push(new Pokemon("021", "Spearow", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("022", "Fearow", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("023", "Ekans", "Veneno", "None"));
arrayPokedex.push(new Pokemon("024", "Arbok", "Veneno", "None"));
arrayPokedex.push(new Pokemon("025", "Pikachu", "Electrico", "None"));
arrayPokedex.push(new Pokemon("026", "Raichu", "Electrico", "None"));
arrayPokedex.push(new Pokemon("027", "Sandshrew", "Tierra", "None"));
arrayPokedex.push(new Pokemon("028", "Sandslash", "Tierra", "None"));
arrayPokedex.push(new Pokemon("029", "NidoranHembra", "Veneno", "None"));
arrayPokedex.push(new Pokemon("030", "Nidorina", "Veneno", "None"));
arrayPokedex.push(new Pokemon("031", "Nidoqueen", "Veneno", "Tierra"));
arrayPokedex.push(new Pokemon("032", "NidoranMacho", "Veneno", "None"));
arrayPokedex.push(new Pokemon("033", "Nidorino", "Veneno", "None"));
arrayPokedex.push(new Pokemon("034", "Nidoking", "Veneno", "Tierra"));
arrayPokedex.push(new Pokemon("035", "Clefairy", "Hada", "None"));
arrayPokedex.push(new Pokemon("036", "Clefable", "Hada", "None"));
arrayPokedex.push(new Pokemon("037", "Vulpix", "Fuego", "None"));
arrayPokedex.push(new Pokemon("038", "Ninetales", "Fuego", "None"));
arrayPokedex.push(new Pokemon("039", "Jigglypuff", "Normal", "Hada"));
arrayPokedex.push(new Pokemon("040", "Wigglytuff", "Normal", "Hada"));
arrayPokedex.push(new Pokemon("041", "Zubat", "Veneno", "Volador"));
arrayPokedex.push(new Pokemon("042", "Golbat", "Veneno", "Volador"));
arrayPokedex.push(new Pokemon("043", "Oddish", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("044", "Gloom", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("045", "Vileplume", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("046", "Paras", "Bicho", "Planta"));
arrayPokedex.push(new Pokemon("047", "Parasect", "Bicho", "Planta"));
arrayPokedex.push(new Pokemon("048", "Venonat", "Bicho", "Veneno"));
arrayPokedex.push(new Pokemon("049", "Venomoth", "Bicho", "Veneno"));
arrayPokedex.push(new Pokemon("050", "Diglett", "Tierra", "None"));
arrayPokedex.push(new Pokemon("051", "Dugtrio", "Tierra", "None"));
arrayPokedex.push(new Pokemon("052", "Meowth", "Normal", "None"));
arrayPokedex.push(new Pokemon("053", "Persian", "Normal", "None"));
arrayPokedex.push(new Pokemon("054", "Psyduck", "Agua", "None"));
arrayPokedex.push(new Pokemon("055", "Golduck", "Agua", "None"));
arrayPokedex.push(new Pokemon("056", "Mankey", "Lucha", "None"));
arrayPokedex.push(new Pokemon("057", "Primeape", "Lucha", "None"));
arrayPokedex.push(new Pokemon("058", "Growlithe", "Fuego", "None"));
arrayPokedex.push(new Pokemon("059", "Arcanine", "Fuego", "None"));
arrayPokedex.push(new Pokemon("060", "Poliwag", "Agua", "None"));
arrayPokedex.push(new Pokemon("061", "Poliwhirl", "Agua", "None"));
arrayPokedex.push(new Pokemon("062", "Poliwrath", "Agua", "Lucha"));
arrayPokedex.push(new Pokemon("063", "Abra", "Psíquico", "None"));
arrayPokedex.push(new Pokemon("064", "Kadabra", "Psíquico", "None"));
arrayPokedex.push(new Pokemon("065", "Alakazam", "Psíquico", "None"));
arrayPokedex.push(new Pokemon("066", "Machop", "Lucha", "None"));
arrayPokedex.push(new Pokemon("067", "Machoke", "Lucha", "None"));
arrayPokedex.push(new Pokemon("068", "Machamp", "Lucha", "None"));
arrayPokedex.push(new Pokemon("069", "Bellsprout", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("070", "Weepinbell", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("071", "Victreebel", "Planta", "Veneno"));
arrayPokedex.push(new Pokemon("072", "Tentacool", "Agua", "Veneno"));
arrayPokedex.push(new Pokemon("073", "Tentacruel", "Agua", "Veneno"));
arrayPokedex.push(new Pokemon("074", "Geodude", "Roca", "Tierra"));
arrayPokedex.push(new Pokemon("075", "Graveler", "Roca", "Tierra"));
arrayPokedex.push(new Pokemon("076", "Golem", "Roca", "Tierra"));
arrayPokedex.push(new Pokemon("077", "Ponyta", "Fuego", "None"));
arrayPokedex.push(new Pokemon("078", "Rapidash", "Fuego", "None"));
arrayPokedex.push(new Pokemon("079", "Slowpoke", "Agua", "Psiquico"));
arrayPokedex.push(new Pokemon("080", "Slowbro", "Agua", "Psiquico"));
arrayPokedex.push(new Pokemon("081", "Magnamite", "Electrico", "Acero"));
arrayPokedex.push(new Pokemon("082", "Magneton", "Electrico", "Acero"));
arrayPokedex.push(new Pokemon("083", "Farfetch'd", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("084", "Doduo", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("085", "Dodrio", "Normal", "Volador"));
arrayPokedex.push(new Pokemon("086", "Seel", "Agua", "None"));
arrayPokedex.push(new Pokemon("087", "Dewgong", "Agua", "Hielo"));
arrayPokedex.push(new Pokemon("088", "Grimer", "Veneno", "None"));
arrayPokedex.push(new Pokemon("089", "Muk", "Veneno", "None"));
arrayPokedex.push(new Pokemon("090", "Shellder", "Agua", "None"));
arrayPokedex.push(new Pokemon("091", "Cloyster", "Agua", "Hielo"));
arrayPokedex.push(new Pokemon("092", "Gastly", "Fantasma", "Veneno"));
arrayPokedex.push(new Pokemon("093", "Haunter", "Fantasma", "Veneno"));
arrayPokedex.push(new Pokemon("094", "Gengar", "Fantasma", "Veneno"));
arrayPokedex.push(new Pokemon("095", "Onix", "Roca", "Tierra"));
arrayPokedex.push(new Pokemon("096", "Drowzee", "Psíquico", "None"));
arrayPokedex.push(new Pokemon("097", "Hypno", "Psíquico", "None"));
arrayPokedex.push(new Pokemon("098", "Krabby", "Agua", "None"));
arrayPokedex.push(new Pokemon("099", "Kingler", "Agua", "None"));






function encontrarListar (find, propiedad) {
    if (isNaN(find)) {
        find = find.toUpperCase();
    };
    let arrayTipo = arrayPokedex.filter(pokemon => pokemon[propiedad] === find);
    for (const pokemon of arrayTipo) {

        console.log("Nº: " + pokemon.id);
        console.log("Pokemon: " + pokemon.pokemon);
        console.log("Tipo Primario: " + pokemon.tipoPrimario);
        console.log("Tipo Secundario: " + pokemon.tipoSecundario);
        console.log("---------------------------");

        let main = document.getElementById("main");
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<img src=${pokemon.img}></img>
                                <h3>Nº: ${pokemon.id}</h3>
                                <p>Nombre: ${pokemon.pokemon} </p>
                                <p>Tipo Primario: ${pokemon.tipoPrimario}</p>
                                <p>Tipo Secundario: ${pokemon.tipoSecundario}</p>`;
        main.appendChild(contenedor);  

    }; 
};



function registrar (find, name, propiedad) {
    if (isNaN(find)) {
        find = find.toUpperCase();
    };
    for (const pokemon of arrayPokedex) {
        let searching = pokemon[name];
        if (searching === find) {
            switch (propiedad) {
                case "VISTO":
                        pokemon.pokeVisto();
                        break;
                    case "ATRAPADO":
                        pokemon.pokeAtrapado();
                        break;
            }; 
            console.log("Nº: " + pokemon.id);
            console.log("Pokemon: " + pokemon.pokemon);
            console.log("Tipo Primario: " + pokemon.tipoPrimario);
            console.log("Tipo Secundario: " + pokemon.tipoSecundario);
            console.log("Visto: " + pokemon.visto);
            console.log("Atrapado: " + pokemon.atrapado);
            console.log("---------------------------");

            let main = document.getElementById("main");
            let contenedor = document.createElement("div");
            contenedor.innerHTML = `<h2>WOW! HAS ${propiedad} A</h2>
                                    <img src=${pokemon.img}></img>
                                    <h3>Nº: ${pokemon.id}</h3>
                                    <p>Nombre: ${pokemon.pokemon} </p>
                                    <p>Tipo Primario: ${pokemon.tipoPrimario}</p>
                                    <p>Tipo Secundario: ${pokemon.tipoSecundario}</p>`;
            main.appendChild(contenedor);  

        };
    };
};

    

function nuevoPoke() {
    let newId = parseInt(prompt("Ingrese nuevo Id"));
    let newName = prompt("Ingrese nombre del Pokemon");
    let newTypeP = prompt("Ingrese tipo Primario del nuevo Pokemon");
    let newTypeS = prompt("Ingrese tipo Secundario del nuevo Pokemon");
    arrayPokedex.push(new Pokemon(newId, newName, newTypeP, newTypeS));
    console.log(arrayPokedex);

    for (const pokemon of arrayPokedex) {
        let main = document.getElementById("main");
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<img src=${pokemon.img}></img>
                                <h3>Nº: ${pokemon.id}</h3>
                                <p>Nombre: ${pokemon.pokemon} </p>
                                <p>Tipo Primario: ${pokemon.tipoPrimario}</p>
                                <p>Tipo Secundario: ${pokemon.tipoSecundario}</p>`;
        main.appendChild(contenedor);
    };

};



let opciones = "12345678";
let nombreUsr = prompt("Bienvenido al proyecto pokedex, cual es tu nombre?");
let opcionUsr = prompt(`Ok ${nombreUsr}, comencemos, esta version de la pokedex cuenta con ${arrayPokedex.length} pokemons, y las opciones son las siguientes: 
        
                        1: Buscar por nombre 
                        2: Buscar por numero
                        3: Listar por tipoPrimario 
                        4: Listar por tipoSecundario 
                        5: Listarlos a todos
                        6: Registrar visto
                        7: Registrar atrapado

Hola profesor Oak!

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

                console.log("Nº: " + pokemon.id);
                console.log("Pokemon: " + pokemon.pokemon);
                console.log("Tipo Primario: " + pokemon.tipoPrimario);
                console.log("Tipo Secundario: " + pokemon.tipoSecundario);
                console.log("---------------------------");

                let main = document.getElementById("main");
                let contenedor = document.createElement("div");
                contenedor.innerHTML = `<img src=${pokemon.img}></img>
                                        <h3>Nº: ${pokemon.id}</h3>
                                        <p>Nombre: ${pokemon.pokemon} </p>
                                        <p>Tipo Primario: ${pokemon.tipoPrimario}</p>
                                        <p>Tipo Secundario: ${pokemon.tipoSecundario}</p>`;
                main.appendChild(contenedor);

            };
            break;
        case "6":
            let pokeVisto = prompt("Ingrese nombre del pokemon");
            registrar (pokeVisto, "pokemon", "VISTO");
            break;
        case "7":
            let pokeAtrapado = prompt("Ingrese nombre del pokemon");
            registrar (pokeAtrapado, "pokemon", "ATRAPADO");
            break;
        case "8":
            nuevoPoke();
            break;
    };
};