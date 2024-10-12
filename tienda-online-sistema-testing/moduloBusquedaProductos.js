// moduloBusquedaProductos.js

async function buscarProducto(nombre) {
    const productos = [
        { idProducto: 1, nombre: 'Laptop', precio: 1500, disponibles: 10 },
        { idProducto: 2, nombre: 'Celular', precio: 800, disponibles: 15 },
        { idProducto: 3, nombre: 'Tablet', precio: 400, disponibles: 8 }
    ];

    // Simulamos un tiempo de espera de entre 50 y 300 ms
    const tiempoDeEspera = Math.floor(Math.random() * 250) + 50;
    await new Promise(resolve => setTimeout(resolve, tiempoDeEspera));

    const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
    return resultados.length > 0 ? resultados : 'Producto no encontrado';
}

module.exports = { buscarProducto };
