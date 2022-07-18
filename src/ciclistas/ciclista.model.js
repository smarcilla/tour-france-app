export class Ciclista {
  constructor(etapa, dado) {
    this.kilometros = 0;
    this.tiempoEtapa = 0;
    this.tiempoCarrera = 0;
    this.etapa = etapa;
    this.dado = dado;
  }
  avanzarKilometros(avance) {
    this.kilometros = this.kilometros + avance;
  }
  sumarTiempoEnEtapa() {
    this.tiempoEtapa = this.etapa.calcularTiempo(this.kilometros);
  }
  sumarTiempoEnCarrera() {
    this.tiempoCarrera = this.tiempoCarrera + this.tiempoEtapa;
  }
  avanzarEnEtapa() {
    const avance = this.dado.lanzar();
    this.avanzarKilometros(avance);
    this.sumarTiempoEnEtapa();
  }
  avanzarEnCarrera() {
    this.sumarTiempoEnCarrera();
  }
  obtenerTiempoEnEtapa() {
    return this.tiempoEtapa;
  }
  obtenerTiempoEnCarrera() {
    return this.tiempoCarrera;
  }
}
