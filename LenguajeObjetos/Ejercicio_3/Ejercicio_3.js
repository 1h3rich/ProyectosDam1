function cuentaBancaria(titular, saldoDisponible) {
    this.titular = titular;
    this.saldoDisponible = saldoDisponible;

    this.retirarDinero = function (cantidad) {
            if (cantidad > this.saldoDisponible) {
                alert("No tienes suficiente saldo para retirar esa cantidad.");
            } else {
                this.saldoDisponible -= cantidad;
                alert("Has retirado $" + cantidad + ". Saldo restante: $" + this.saldoDisponible);
                return;
            }
    };

    this.depositarDinero = function (cantidad) {
        this.saldoDisponible += cantidad;
        alert("Has depositado $" + cantidad + ". Saldo disponible: " + this.saldoDisponible);
    };
}

// Crear una cuenta bancaria
const miCuenta = new cuentaBancaria("Juan Pérez", 1000);

const cantidadRetirar = parseFloat(prompt("¿Cuánto dinero deseas retirar?"));
miCuenta.retirarDinero(cantidadRetirar);

const cantidadDepositar = parseFloat(prompt("¿Cuánto dinero deseas depositar?"));
miCuenta.depositarDinero(cantidadDepositar);

const cantidadRetirar2 = parseFloat(prompt("¿Cuánto dinero deseas retirar?"));
miCuenta.retirarDinero(cantidadRetirar2);