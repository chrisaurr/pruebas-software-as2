// moduloPago.js

async function procesarPago(monto) {
    if (monto > 0) {
        return { exito: true, mensaje: 'Pago procesado exitosamente' };
    } else {
        return { exito: false, mensaje: 'Monto inválido para el pago' };
    }
}

module.exports = { procesarPago };
