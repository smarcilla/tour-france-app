import { Carrera } from "./carrera.model";
describe("Carrera", () => {
  let carrera, etapas, ciclistas, result, etapa;
  describe("obtenerEtapaACorrer", () => {
    beforeEach(() => {
      etapas = [
        { numero: 1, terminada: () => true },
        { numero: 2, terminada: () => false },
        { numero: 3, terminada: () => false },
      ];
      ciclistas = [{}];
      carrera = new Carrera(etapas, ciclistas);
      result = carrera.obtenerEtapaACorrer();
    });
    test("should return second element", () => {
      expect(result.numero).toEqual(2);
    });
  });
  describe("avanzarEnEtapa", () => {
    let mockAvanzarEnEtapa = jest.fn();
    beforeEach(() => {
      etapa = {
        terminada: jest.fn(() => false),
        calcularClasificacion: jest.fn(),
      };
      ciclistas = [...Array(5)].map((_) => ({
        avanzarEnEtapa: mockAvanzarEnEtapa,
      }));
      carrera = new Carrera(etapas, ciclistas);
      carrera.avanzarEnEtapa(etapa);
    });
    test("should call ciclista avanzarEnEtapa", () => {
      expect(mockAvanzarEnEtapa).toHaveBeenCalledTimes(ciclistas.length);
    });
    test("should call etapa calcularClasificacion", () => {
      expect(etapa.calcularClasificacion).toHaveBeenCalledWith(ciclistas);
    });
  });
  describe("avanzarEnCarrera", () => {
    let mockCorredorAvanzarEnCarrera = jest.fn();
    beforeEach(() => {
      ciclistas = [...Array(5)].map((_) => ({
        avanzarEnCarrera: mockCorredorAvanzarEnCarrera,
      }));
      carrera = new Carrera(etapas, ciclistas);
      carrera.avanzarEnCarrera();
    });
    test("should call ciclista avanzarEnCarrera", () => {
      expect(mockCorredorAvanzarEnCarrera).toHaveBeenCalled();
    });
  });

  describe("calcularClasificacion", () => {});
});
