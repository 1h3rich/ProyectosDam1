var bus = {
    marca: "Mercedes",
    modelo: "Sprinter",
    año: 2020,
    numeroDeCapacidad: 20,
    cantidadActualPasajeros: 15,
    
    subirPasajeros: function(cantidad) {
        if (this.cantidadActualPasajeros + cantidad <= this.numeroDeCapacidad) {
            this.cantidadActualPasajeros = this.cantidadActualPasajeros + cantidad;
            console.log(cantidad + " pasajeros han subido al bus. Cantidad actual de pasajeros: " + this.cantidadActualPasajeros);
        }else {
            console.log("No se pueden subir " + cantidad + " pasajeros. Capacidad máxima alcanzada.");
        }
    },

    bajarPasajeros: function(cantidad){
        if(this.cantidadActualPasajeros - cantidad >= 0){
            this.cantidadActualPasajeros -= cantidad;
            console.log(cantidad + " pasajeros han bajado del bus. Cantidad actual de pasajeros: " + this.cantidadActualPasajeros);
        }else {
            console.log("No se pueden bajar " + cantidad + " pasajeros. No hay suficientes pasajeros en el bus.");
        }
    },

    asignarConductor: function(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia;
        console.log("El conductor asignado es: " + this.conductor + " con licencia: " + this.licencia);
    },
    
    obtenerInformacion: function() {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Año: " + this.año);
        console.log("Número de capacidad: " + this.numeroDeCapacidad);
        console.log("Cantidad actual de pasajeros: " + this.cantidadActualPasajeros);
        console.log("Información del conductor:");
        console.log("Nombre: " + this.nombre);
        console.log("Licencia: " + this.licencia);
    }
}

bus.subirPasajeros(5);
bus.bajarPasajeros(2);
bus.asignarConductor("María Gómez", "C7890123");
bus.obtenerInformacion();

