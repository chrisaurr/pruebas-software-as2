// moduloArticulo.js

// Esta función simula la selección de un artículo por su ID y devuelve su precio.
function seleccionarArticulo(idArticulo) {
    const articulos = {
        1: { nombre: 'Gaseosa', precio: 25 },
        2: { nombre: 'Papas fritas', precio: 15 },
        3: { nombre: 'Chocolate', precio: 20 }
    };

    return articulos[idArticulo] || null; // Si el artículo no existe, devolvemos null
}

module.exports = { seleccionarArticulo };
