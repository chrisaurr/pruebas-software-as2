// sistemaTiendaOnline.test.js

const moduloBusquedaProductos = require('./moduloBusquedaProductos');
const moduloCarrito = require('./moduloCarrito');
const moduloPago = require('./moduloPago');

describe('Pruebas de Sistemas para la Tienda en Línea', () => {

    test('Búsqueda de productos y tiempo de respuesta', async () => {
        const inicio = Date.now();
        const resultado = await moduloBusquedaProductos.buscarProducto('Laptop');
        const duracion = Date.now() - inicio;

        // Verificar que se encuentre el producto
        expect(resultado).toContainEqual({ idProducto: 1, nombre: 'Laptop', precio: 1500, disponibles: 10 });

        // Verificar que el tiempo de respuesta sea menor a 300 ms
        expect(duracion).toBeLessThan(300);
    });

    test('Agregar productos al carrito con disponibilidad', async () => {
        const productosDisponibles = [
            { idProducto: 1, nombre: 'Laptop', precio: 1500, disponibles: 10 },
            { idProducto: 2, nombre: 'Celular', precio: 800, disponibles: 15 }
        ];

        // El usuario intenta agregar 3 laptops al carrito (disponibilidad suficiente)
        const agregarCarritoExitoso = await moduloCarrito.agregarAlCarrito(1, 3, productosDisponibles);
        expect(agregarCarritoExitoso).toHaveProperty('exito', true);
        expect(agregarCarritoExitoso.mensaje).toBe('Producto agregado: Laptop, cantidad: 3');
        expect(agregarCarritoExitoso.disponiblesRestantes).toBe(7);

        // El usuario intenta agregar más productos de los que hay disponibles
        const agregarCarritoFallido = await moduloCarrito.agregarAlCarrito(1, 20, productosDisponibles);
        expect(agregarCarritoFallido).toHaveProperty('exito', false);
        expect(agregarCarritoFallido.mensaje).toBe('No hay suficientes productos disponibles');
    });

    test('Procesar pago exitoso después de agregar al carrito', async () => {
        const pago = await moduloPago.procesarPago(4500); // Monto de la compra
        expect(pago).toHaveProperty('exito', true);
        expect(pago.mensaje).toBe('Pago procesado exitosamente');
    });

    test('Prueba de seguridad: Prevención de SQL Injection en la búsqueda de productos', async () => {
        // Simulamos un ataque de SQL injection en la búsqueda de productos
        const resultado = await moduloBusquedaProductos.buscarProducto("' OR '1'='1");

        // El sistema no debería devolver todos los productos
        expect(resultado).toBe('Producto no encontrado');
    });

});
