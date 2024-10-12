// lodash.test.js

/**
 * En esta prueba de caja negra, estamos utilizando la librería Lodash para 
 * probar su función _.chunk. Esta función divide un array en grupos de tamaño especificado.
 * 
 * Estas pruebas son de caja negra porque:
 * - No conocemos cómo está implementada la función _.chunk internamente.
 * - Solo verificamos que el comportamiento observado para ciertos inputs devuelva los outputs esperados.
 * - Nos basamos únicamente en la documentación y el comportamiento esperado de Lodash.
 */

const _ = require('lodash'); // Importamos Lodash para usar la función _.chunk

describe('Pruebas de Caja Negra para Lodash _.chunk', () => {

    test('Dividir un array de 4 elementos en grupos de 2', () => {
        expect(_.chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });

    test('Dividir un array de 5 elementos en grupos de 2', () => {
        expect(_.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('Dividir un array vacío devuelve un array vacío', () => {
        expect(_.chunk([], 2)).toEqual([]);
    });

    test('Dividir un array con tamaño de grupo mayor que el array devuelve el array completo', () => {
        expect(_.chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    test('Dividir un array de un solo elemento', () => {
        expect(_.chunk([1], 1)).toEqual([[1]]);
    });

    test('Dividir un array con grupos de tamaño 1 devuelve un array de arrays individuales', () => {
        expect(_.chunk([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
    });
});
