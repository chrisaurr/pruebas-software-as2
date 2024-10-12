// moduloPago.js

// Esta función verifica si el dinero ingresado es suficiente para el artículo seleccionado.
function validarPago(precioArticulo, montoIngresado) {
    if (montoIngresado >= precioArticulo) {
        const cambio = montoIngresado - precioArticulo;
        return { exito: true, cambio };
    } else {
        return { exito: false, mensaje: 'Monto insuficiente' };
    }
}

module.exports = { validarPago };
