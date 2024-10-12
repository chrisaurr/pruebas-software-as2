// moduloCarrito.js

async function agregarAlCarrito(idProducto, cantidad, productosDisponibles) {
    const producto = productosDisponibles.find(prod => prod.idProducto === idProducto);
    if (producto && producto.disponibles >= cantidad) {
        return {
            exito: true,
            mensaje: `Producto agregado: ${producto.nombre}, cantidad: ${cantidad}`,
            disponiblesRestantes: producto.disponibles - cantidad
        };
    } else {
        return { exito: false, mensaje: 'No hay suficientes productos disponibles' };
    }
}

module.exports = { agregarAlCarrito };
