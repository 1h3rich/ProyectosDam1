var precioVenta = {
    prompt: "Ingrese el precio de venta del producto",
    valor: 0,
    promptDescuento: "Ingrese el porcentaje de descuento a aplicar",
    descuento: 0,
    calcularDescuento: function() { 
        var descuentoAplicado = (this.valor * this.descuento) / 100;
        var precioFinal = this.valor - descuentoAplicado;
        alert("El precio final del producto es: " + precioFinal);
    }
}

precioVenta.valor = parseFloat(prompt(precioVenta.prompt));
precioVenta.descuento = parseFloat(prompt(precioVenta.promptDescuento));
precioVenta.calcularDescuento();