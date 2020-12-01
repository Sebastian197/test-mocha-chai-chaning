// https://www.chaijs.com/api/bdd/#method_include
var expect = require('chai').expect;

/**
 * Mediante el 'only' diremos que pruebas o que bloques se ejecutarán.
 * En el primer caso, al tener "only" junto con el describe, se ejecuta 
 * TODAS las pruebas de dentro
 * En el segundo caso, solo se ejecuta la primera prueba ya que es la que tiene
 * "only" junto con el "it".
 * 
 * La función only() hace posible ejecutar solo el bloque o el caso de prueba al 
 * cual se lo añadamos. Es muy útil si tenemos un gran número de tests y por algún motivo 
 * queremos ejecutar un parte de ellos o incluso un único test.
 */

describe.only('Caso 1 - Only', () => {
    it('Exclusive Test 1', () => {
        expect(true).to.equal(true);
        expect(true).to.be.true;
    });
    it('Exclusive Test 2', () => {
        expect(true).to.equal(true);
        expect(true).to.be.true;
    });
});

describe('Caso 2 - Only', () => {
    it.only('Exclusive Test 1 - Caso 2', () => {
        expect(true).to.equal(true);
        expect(true).to.be.true;
    });
    it('Exclusive Test 2 - Caso 2', () => {
        expect(true).to.equal(true);
        expect(true).to.be.true;
    });
});

