
describe.only('Hooks', () => {
    before(() => console.log('before All - Se ejecuta al inicio UNA VEZ!'));
    after(() => console.log('after All - Se ejecuta al final de todas las pruebas ("it") UNA VEZ!'));
    beforeEach(() => console.log('beforeEach ejecutando antes de todos los ("it")'));
    afterEach(() => console.log('beforeEach ejecutando despues de todos los ("it")'));

    it('Prueba 1', () => console.log('TEST 1'));
    it('Prueba 2', () => console.log('TEST 2'));
});