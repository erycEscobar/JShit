
/*  
    - El siguiente algoritmo lee un nombre o palabra ingresada por el usuario, 
    devuelve el total de letras que componen el nombre, cuantas de estas son consonantes y cuantas son vocales,
    en caso de que el ingreso contenga caracteres numericos, detiene el programa y alerta al usuario con una notificacion.
*/

/* --- VARIABLES DE USO GLOBAL --- */
let userName = prompt ("Ingrese su nombre por favor"); // Guardamos el nombre en una variable
let letters = userName.length; // Haciendo uso de la propiedad length guardamos en letters la cantidad de letras del nombre
let vocales = 0; // Inicializamos en 0 una variable para contar las vocales
let consonantes = 0; // Inicializamos en 0 una variable para contar las consonantes
let troll = false; // Inicializamos en false una flag para trolls
let numericos = "0123456789"; // Guardamos los caracteres numericos en un strig

/* --- ALGORITMO --- */
for (let i = 0; i < letters ; i++) { // Haciendo uso del ciclo for y la variable letters recorremos el nombre ingresado por el usuario caracter a caracter
    let aux = userName.charAt(i); // Inicializamos una variable aux que guardara temporalmente el caracter apuntado por el ciclo for
    if (numericos.indexOf(aux,0) != -1) { // En caso de que el ingreso tenga algun caracter numerico
        troll = true; // Levantamos la bandera de troll
        alert ("Troll detected??!!"); // Alertamos que alguien quiere pasarse de listo
        break;
    }
    else {
        switch (aux) { // Comprobamos si el caracter leido es una vocal 
            case "a":
                vocales++; // Si el caracter es una vocal se incrementa el contador de vocales
                break;
            case "e":
                vocales++;
                break;
            case "i":
                vocales++;
                break;
            case "o":
                vocales++;
                break;
            case "u":
                vocales++;
                break;
            default:
                consonantes++; // Si el caracter no es alguna vocal se incrementa el contador de consonantes
                break;
        }
    }
}

if (troll) { // Si se ingresaron numeros se informa que esta caracteristica aun no esta disponible
    console.log ("El conteo de numeros no es una carcteristica disponible de la version gratis del algoritmo");
}
else { // Si efectivamente se ingresaron letras, notificamos la informacion pertinente
    console.log ("Su nombre es " + userName + ".");
    console.log ("Su nombre tiene " + letters + " letras, de las cuales, " + vocales + " son vocales, y " + consonantes + " son consonantes.");
}