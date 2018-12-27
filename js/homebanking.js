'use strict'
//Declaración de variables


var nombreUsuario = "Juan Pablo";
var saldoCuenta = 5000;
var limiteExtraccion = 4000;

//Variables de servicios
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var muestra = "";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar

//////////////////////////////////////////

// Función de suma

function depositarDinero() {
    sumaSi();

}

function sumaSi(valorAdepositar) {
    var valorAdepositar = parseInt(prompt("Ingrese el valor que desea depositar"));

    if (isNaN(valorAdepositar)) {
        return alert(nombreUsuario + ": asegúrese de ingresar un valor válido a depositar.");
    }

    if (valorAdepositar < 100) {
        return alert(nombreUsuario + ": asegúrese de estar ingresando una cifra mayor a cien.")
    }
    alert("Se está realizando la operación. Aguarde unos instantes...");
    sumarDinero(valorAdepositar);

}

function sumarDinero(sumar) {

    var sumaSaldo = saldoCuenta + sumar;
    alert("Has depositado: " + sumar + "\nSaldo anterior: " + saldoCuenta + "\nSaldo actual: " + sumaSaldo);
    saldoCuenta = sumaSaldo;
    actualizarSaldoEnPantalla();


}


//////////////////////////////////////////

//Funciones extraer dinero
function extraerDinero() {
    retirarSi();

}

function retirarSi() {

    var valorAretirar = parseInt(prompt("Ingrese un nuevo valor de extracción:"));
    if (isNaN(valorAretirar)) {
        return alert(nombreUsuario + ": asegúrese de ingresar un valor válido a extraer.");
    }

    if (valorAretirar == 0) {
        return alert(nombreUsuario + ": asegúrese de ingresar una cifra mayor a cero.");
    }
    if (valorAretirar > limiteExtraccion) {
        return alert(nombreUsuario + ": asegúrese de no pasar el límite permitido de " + limiteExtraccion + ".");
    }
    if (valorAretirar > saldoCuenta) {
        return alert(nombreUsuario + ": asegúrese de tener los fondos necesarios para realizar la operación.");
    }

    if (valorAretirar % 100 != 0) {
        return alert(nombreUsuario + ": sólo tiene permitido extraer billetes de cien.");
    }
    alert("Se está realizando la operación. Aguarde unos instantes...");
    retirarDinero(valorAretirar);

}


function retirarDinero(retiro) {
    var restaSaldo = saldoCuenta - retiro;
    alert("Has retirado: " + retiro + "\n" + "Saldo anterior: " + saldoCuenta + "\n" + "Saldo actual: " + restaSaldo);
    saldoCuenta = restaSaldo;
    actualizarSaldoEnPantalla();

}

//////////////////////////////////////////

//Funciones limite de extracción

function cambiarLimiteDeExtraccion() {
    cambioLimite();
}

function cambioLimite(nuevoLimiteExtraccion) {
    nuevoLimiteExtraccion = parseInt(prompt(nombreUsuario + ": ingrese el nuevo valor del límite de extracción"));

    if (isNaN(nuevoLimiteExtraccion)) {
        return alert(nombreUsuario + ": asegúrese de ingresar un valor válido para cambiar el límite de extracción.")
    }

    if (nuevoLimiteExtraccion == 0) {
        return alert(nombreUsuario + ": asegúrese de ingresar una cifra mayor a cero.")
    }
    limiteExtraccion = nuevoLimiteExtraccion;
    actualizarLimiteEnPantalla();

    alert(nombreUsuario + ": este es su nuevo límite de extracción: " + nuevoLimiteExtraccion);
}

//////////////////////////////////////////

//Funciones pago de servicios

function pagarServicio() {
    pagarServicioSi();
}

function pagarServicioSi(servicio) {
    servicio = parseInt(prompt(nombreUsuario + ": ingrese el número del servicio que desea pagar" + "\n1- Agua" + "\n2- Teléfono" + "\n3- Luz" + "\n4- Internet"));

    switch (servicio) {

        case 1:
            muestra = servicioAgua();
            break;

        case 2:
            muestra = servicioTelefono();
            break;

        case 3:
            muestra = servicioLuz();
            break;

        case 4:
            muestra = servicioInternet();
            break;

        default:
            muestra = alert(nombreUsuario + ": asegúrese de ingresar el número correcto del servicio a pagar.");
            break;
    }
}

function servicioAgua() {
    var resultadoAgua;
    if (agua < saldoCuenta) {
        resultadoAgua = saldoCuenta - agua;
        alert("Has pagado: " + agua + "\n" + "Saldo anterior: " + saldoCuenta + "\n" + "Saldo actual: " + resultadoAgua);
        saldoCuenta = resultadoAgua;
        actualizarSaldoEnPantalla();
    } else {
        alert(nombreUsuario + ": asegúrese de tener monto suficiente para efectuar el pago.");
    }
}

function servicioTelefono() {
    var resultadoTelefono;
    if (telefono < saldoCuenta) {
        resultadoTelefono = saldoCuenta - telefono;
        alert("Has pagado: " + telefono + "\n" + "Saldo anterior: " + saldoCuenta + "\n" + "Saldo actual: " + resultadoTelefono);
        saldoCuenta = resultadoTelefono;
        actualizarSaldoEnPantalla();
    } else {
        alert(nombreUsuario + ": asegúrese de tener monto suficiente para efectuar el pago.");
    }

}

function servicioLuz() {
    var resultadoLuz;
    if (luz < saldoCuenta) {
        resultadoLuz = saldoCuenta - luz;
        alert("Has pagado: " + telefono + "\n" + "Saldo anterior: " + saldoCuenta + "\n" + "Saldo actual: " + resultadoLuz);
        saldoCuenta = resultadoLuz;
        actualizarSaldoEnPantalla();
    } else {
        alert(nombreUsuario + ": asegúrese de tener monto suficiente para efectuar el pago.");
    }

}

function servicioInternet() {
    var resultadoInternet;
    if (internet < saldoCuenta) {
        resultadoInternet = saldoCuenta - internet;
        alert("Has pagado: " + telefono + "\n" + "Saldo anterior: " + saldoCuenta + "\n" + "Saldo actual: " + resultadoInternet);
        saldoCuenta = resultadoInternet;
        actualizarSaldoEnPantalla();
    } else {
        alert(nombreUsuario + ": asegúrese de tener monto suficiente para efectuar el pago.");
    }

}

//////////////////////////////////////////

//Funciones transferencia

function transferirDinero() {
    transferenciaAmiga();
}

function transferenciaAmiga(transferencia) {
    transferencia = parseInt(prompt(nombreUsuario + ": seleccione el número de la cuenta a la que desea transferir: \n1 - Bautista \n2 - Maya"));

    switch (transferencia) {
        case 1:
            muestra = persona1.cuentaBautista();
            break;
        case 2:
            muestra = persona2.cuentaMaya();
            break;

        default:
            muestra = alert(nombreUsuario + ": asegúrese de estar ingresando los datos correctos para realizar la transferencia.");
            break;
    }
}

var persona1 = {
    nombre: "Bautista",
    cuit: 43521628567,
    numeroCuenta: 1234567,
    cuentaBautista: function () {
        var resultadoBautista;
        var transferenciaBautista = confirm(nombreUsuario + ", ¿está seguro que desea trasnferir dinero a la cuenta " + this.numeroCuenta + ", de nombre " + this.nombre + ", CUIT " + this.cuit + "?");
        var transferenciaBautista = parseInt(prompt("Ingrese el valor que desea transferir:"));
        if (transferenciaBautista < saldoCuenta) {
            resultadoBautista = saldoCuenta - transferenciaBautista;
            alert("Se ha transferido: " + transferenciaBautista + " de sus fondos. \nCuenta destino: " + this.numeroCuenta);
            saldoCuenta = resultadoBautista;
            actualizarSaldoEnPantalla();
        } else {
            alert(nombreUsuario + " asegúrese de tener el monto suficiente para realizar la operación.");
        }
    }

}

    var persona2 = {
        nombre: "Maya",
        cuit: 69542585234,
        numeroCuenta: 7654321,
        cuentaMaya: function () {
            var resultadoMaya;
            var transferenciaMaya = confirm(nombreUsuario + ", ¿está seguro que desea trasnferir dinero a la cuenta " + this.numeroCuenta + ", de nombre " + this.nombre + ", CUIT " + this.cuit + "?");
            var transferenciaMaya = parseInt(prompt("Ingrese valor que desea transferir:"));
            if (transferenciaMaya < saldoCuenta) {
                resultadoMaya = saldoCuenta - transferenciaMaya;
                alert("Se han transferido: " + transferenciaMaya + " de sus fondos. \nCuenta destino: " + this.numeroCuenta);
                saldoCuenta = resultadoMaya;
                actualizarSaldoEnPantalla();
            } else {
                alert(nombreUsuario + " asegúrese de tener el monto suficiente para realizar la operación.");
            }
        }
    }

    //////////////////////////////////////////

    //Funciones inicio de sesión

    function iniciarSesion() {
        responsableCuenta.cuentaJP();
    }


    var responsableCuenta = {
        usuario: "JPG",
        pass: "9966",
        cuentaJP: function () {
            var codigo = parseInt(prompt("¡Bienvenido! \nPor favor ingrese su contraseña para comenzar a realizar operaciones."));
            if (codigo != this.pass) {
                block(codigo);
                saldoCuenta = 0;
                actualizarSaldoEnPantalla()
            } else {
                alert("Bienvenido/a, " + this.nombre + " " + this.apellido + ". Ya puede comenzar a realizar operaciones");
            }
        }

    }

    function block() {
        alert("Sr. usuario: la contraseña ingresada no es correcta. Por seguridad hemos bloqueado su cuenta.");
        block();
    }


    //Funciones que actualizan el valor de las variables en el HTML
    function cargarNombreEnPantalla() {
        document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
    }

    function actualizarSaldoEnPantalla() {
        document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
    }

    function actualizarLimiteEnPantalla() {
        document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
    }