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

const arrayPokedex = new Pokemon (1, 'Bulbasaur', 'Planta', 'Veneno');

/*
[ 
    {id: 1, pokemon: "Bulbasaur", tipoPrimario: "Planta", tipoSecundario: "Veneno"},
    {id: 2, pokemon: "Ivysaur", tipoPrimario: "Planta", tipoSecundario: "Veneno"},
    {id: 3, pokemon: "Venusaur", tipoPrimario: "Planta", tipoSecundario: "Veneno"},
    {id: 4, pokemon: "Charmander", tipoPrimario: "Fuego", tipoSecundario: "none"},

];
    */


console.log (arrayPokedex);

arrayPokedex.pokeVisto();

console.log (arrayPokedex);

arrayPokedex.pokeAtrapado();

console.log (arrayPokedex);


