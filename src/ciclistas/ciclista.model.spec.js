const Ciclista = require('./ciclista.model');

const etapa = {
    calcularTiempo: function (kilometros) {
        return 10 * kilometros;
    }
}

const dado = {
    lanzar: function () {
        return 10;
    }
}
describe('Ciclista class', () => {
    let ciclista, result;

    describe('obtenerTiempoEnEtapa', () => {
        beforeEach(() => {
            ciclista = new Ciclista(etapa, dado);
            ciclista.avanzarEnEtapa();
            result = ciclista.obtenerTiempoEnEtapa()
        })
        test('should return 100 seconds', () => {
            expect(result).toEqual(100)
        });
    });
    describe("obtenerTiempoEnCarrera", () => {
        beforeEach(() => {
            ciclista = new Ciclista(etapa, dado);
            ciclista.avanzarEnEtapa();
            ciclista.avanzarEnEtapa();
            ciclista.avanzarEnEtapa();
            ciclista.avanzarEnCarrera();
            result = ciclista.obtenerTiempoEnCarrera();
        })
        test("should return 300 seconds", () => {
            expect(result).toEqual(300);
        })
    })
});
