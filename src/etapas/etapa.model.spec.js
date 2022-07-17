const Etapa = require('./etapa.model');
describe("Etapa", () => {
    let etapa, ciclistas, result;
    describe("calcularTiempo", () => {
        beforeEach(() => {
            etapa = new Etapa(100, 5);
            result = etapa.calcularTiempo(5)
        })
        test("should return 25 seconds", () => {
            expect(result).toBe(25);
        })
    })
    describe("calcularClasificacion", () => {
        beforeEach(() => {
            etapa = new Etapa(100, 5);
            ciclistas = [
                { nombre: "Ciclista1", obtenerTiempoEnEtapa: () => 340 },
                { nombre: "Ciclista2", obtenerTiempoEnEtapa: () => 500 },
                { nombre: "Ciclista3", obtenerTiempoEnEtapa: () => 200 },
                { nombre: "Ciclista4", obtenerTiempoEnEtapa: () => 600 }
            ]
            result = etapa.calcularClasificacion(ciclistas);
        })
        test("Should return clasificacion etapa", () => {
            expect(result).toEqual([
                { nombre: "Ciclista4", posicion: 1, tiempo: 0 },
                { nombre: "Ciclista2", posicion: 2, tiempo: 100 },
                { nombre: "Ciclista1", posicion: 3, tiempo: 260 },
                { nombre: "Ciclista3", posicion: 4, tiempo: 400 },
            ]
            )
        })
    })
})