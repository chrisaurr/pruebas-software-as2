// moduloEntrega.js

// Esta función simula la entrega del artículo si el pago fue exitoso.
function entregarArticulo(exito, articulo) {
    if (exito) {
        return `Artículo entregado: ${articulo.nombre}`;
    } else {
        return 'No se puede entregar el artículo';
    }
}

module.exports = { entregarArticulo };
