class pokemon {
    constructor (nombre, tipoPrimario, tipoSecundario, ataquePrimario, ataqueSecundario) {
        this.nombre = nombre;
        this.tipoPrimario = tipoPrimario;
        this.tipoSecundario = tipoSecundario;
        this.ataquePrimario = ataquePrimario;
        this.ataqueSecundario = ataqueSecundario;
        this.energia = energia;
        this.vida = vida;
        this.nivel = nivel;
    }

    ataquePrincipal () {
        this.energia = energia - this.ataquePrincipal;
    }

    energia () {
        this.energia = 100;
    }
}

