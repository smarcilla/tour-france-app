const Dado = require('./dado.model');
jest.mock()
describe('Dato class', () => {
    let result, dado;
    beforeEach(() => {
        dado = new Dado();
    });
    describe('lanzar', () => {
        beforeEach(() => {
            jest.spyOn(global.Math, 'random').mockReturnValue(0.98756);
            result = dado.lanzar();
        });
        afterEach(() => {
            jest.spyOn(global.Math, 'random').mockRestore();
        })
        test('should return 10', () => {
            expect(result).toBe(10);
        });
    });
});