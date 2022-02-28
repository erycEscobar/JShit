/*  01_SimuladorInteractivo 

    El siguiente algoritmo le pide al usuario que ingrese un monto a abonar, 
    la cantidad de cuotas en las que este desea realizar el pago, 
    y devuleve la informacion pertinente, monto total ingresado, cuotas elegidas
    y total a abonar en cada cuota.                                         */


/* --- VARIABLES DE USO GLOBAL --- */

let monto = prompt ("Ingrese el monto a abonar por favor");
let cuotaValida = false;
let cuotas = 0;
let total = 0;

/* --- FUNCIONES --- */

function obtenerCuotas (cuotaValida) {
/*  Descripcion: Devuelve la cantidad de cuotas ingresada por el usuario  */
    while (cuotaValida != true) {
        cuotas = prompt ("Ingrese la cantidad de cuotas en las que desee abonar su monto, las opciones son 1, 3, 6, 12 o 24");
        switch (cuotas) {
            case "1":
                cuotaValida = true;
                break;
            case "3":
                cuotaValida = true;
                break;
            case "6":
                cuotaValida = true;
                break;
            case "12":
                cuotaValida = true;
                break;
            case "24":
                cuotaValida = true;
                break;
            default:
                break;
        }
    }
    return cuotas;
}


function calcularTotalCuota (monto, cuotas) {
/*  Descripcion: Devuelve el monto a pagar en cada cuota  */
    return monto / cuotas;
}

/* --- ALGORITMO --- */

cuotas = obtenerCuotas(cuotaValida);
total = calcularTotalCuota(monto, cuotas);

console.log ("Usted ingreso un monto por $" + monto + ".");
console.log ("La cantidad de cuotas seleccionada fue " + cuotas + ".");
console.log ("El monto de cada cuota va a ser de $" + total + ".");
console.log (" ----------------------------------------------------- ");
console.log ("TOTAL: $" + monto + " en " + cuotas + " pagos de $" + total + ".");