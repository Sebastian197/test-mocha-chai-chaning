var expect = require('chai').expect;
describe.only('Boolean test', () => {
    const numero = 2;
    it('El valor true es verdadero', () => {
        expect(true).to.equal(true);
        expect(true).to.be.true;
        expect(1 + 1 > 0).to.be.true;
    });
    it('El valor false es falso', () => {
        expect(false).to.equal(false);
        expect(false).to.be.false;
        expect(1 + 1 < 0).to.be.false;
    })
    it('1 es de tipo número', () => {
        expect(1).to.be.a('number');
        expect(typeof 1).to.equal('number');
    });
    it('1 NO es de tipo string', () => {
        expect(typeof 1 === 'string').to.be.false;
        expect(typeof 1 === 'string').to.equal(false);
    });
    it('1 NO es de tipo booleano', () => {
        expect(typeof 1 === 'boolean').to.be.false;
        expect(typeof 1 === 'boolean').to.equal(false);
    });

});

