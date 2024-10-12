// validacionMaquina.test.js

/**
 * Pruebas de validación para la máquina expendedora.
 * Validamos los siguientes casos:
 * - El usuario selecciona un artículo.
 * - El usuario ingresa dinero.
 * - Si el dinero es suficiente, se entrega el artículo.
 * - Si el dinero es insuficiente, no se entrega el artículo y se muestra un mensaje.
 */

const moduloArticulo = require('./moduloArticulo');
const moduloPago = require('./moduloPago');
const moduloEntrega = require('./moduloEntrega');

describe('Pruebas de Validación para la Máquina Expendedora', () => {

    test('Entregar artículo cuando el dinero es suficiente', () => {
        // 1. El usuario selecciona un artículo (Gaseosa)
        const articulo = moduloArticulo.seleccionarArticulo(1);
        expect(articulo).toHaveProperty('precio', 25);

        // 2. El usuario ingresa dinero suficiente
        const pago = moduloPago.validarPago(articulo.precio, 30);

        // 3. Verificamos que el pago fue exitoso y se devuelva el cambio correcto
        expect(pago).toHaveProperty('exito', true);
        expect(pago).toHaveProperty('cambio', 5);

        // 4. Entregar el artículo
        const resultadoEntrega = moduloEntrega.entregarArticulo(pago.exito, articulo);
        expect(resultadoEntrega).toBe('Artículo entregado: Gaseosa');
    });

    test('No entregar artículo cuando el dinero es insuficiente', () => {
        // 1. El usuario selecciona un artículo (Chocolate)
        const articulo = moduloArticulo.seleccionarArticulo(3);
        expect(articulo).toHaveProperty('precio', 20);

        // 2. El usuario ingresa dinero insuficiente
        const pago = moduloPago.validarPago(articulo.precio, 10);

        // 3. Verificamos que el pago no fue exitoso
        expect(pago).toHaveProperty('exito', false);
        expect(pago).toHaveProperty('mensaje', 'Monto insuficiente');

        // 4. No se debe entregar el artículo
        const resultadoEntrega = moduloEntrega.entregarArticulo(pago.exito, articulo);
        expect(resultadoEntrega).toBe('No se puede entregar el artículo');
    });

});
