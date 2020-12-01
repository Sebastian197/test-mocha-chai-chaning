var expect = require('chai').expect;
describe.only('Strings test', () => {
    const foo = 'bar';
    it('Es igual al valor del string', () => {
        expect(foo).to.equal('bar');
    });
    it('Es de tipo string', () => {
        expect(foo).to.be.a('string');
        expect(typeof foo).to.equal('string');
    });
    it('Tiene una longitud de 3 carácteres', () => {
        expect(foo).to.have.length(3);
        expect(foo.length).to.equal(3);
    });
    it('Encuentra / Incluye "ba" en la palabra', () => {
        expect(foo).to.include('ba');
        expect(foo).to.match(/^ba/);
        expect(foo).to.have.string('ba');
    });
    it('NO incluye "fa" en la palabra', () => {
        expect(foo).not.to.include('fa');
        expect(foo).not.to.match(/^fa/);
        expect(foo).not.to.have.string('fa');
    });
});

