export class Carrera {
  constructor(etapas, ciclistas) {
    this.etapas = etapas;
    this.ciclistas = ciclistas;
    this.ciclistaGanador = ciclistas[0];
  }
  obtenerEtapaACorrer() {
    return this.etapas.find((e) => !e.terminada());
  }
  avanzarEnEtapa(etapa) {
    if (!etapa.terminada()) {
      this.ciclistas.forEach((c) => c.avanzarEnEtapa());
      etapa.calcularClasificacion(this.ciclistas);
    }
  }
  avanzarEnCarrera() {
    this.ciclistas.forEach((c) => c.avanzarEnCarrera());
  }
  calcularGanador(ciclista) {
    const tiempoActualCiclista = ciclista.obtenerTiempoEnCarrera();
    const tiempoCiclistaGanador = this.ciclistaGanador;
    if (tiempoActualCiclista > tiempoCiclistaGanador) {
      this.ciclistaGanador = ciclista;
    }
  }
  calcularTiempoCiclista(ciclista) {
    return (
      this.ciclistaGanador.obtenerTiempoEnCarrera() -
      ciclista.obtenerTiempoEnCarrera()
    );
  }
  calcularClasificacion() {
    const ciclistasOrdenados = this.ciclistas.sort((ciclista1, ciclista2) => {
      const tiempoEnCarreraCiclista1 = ciclista1.obtenerTiempoEnCarrera();
      const tiempoEnCarreraCiclista2 = ciclista2.obtenerTiempoEnCarrera();
      if (tiempoEnCarreraCiclista1 < tiempoEnCarreraCiclista2) {
        return 1;
      }
      if (tiempoEnCarreraCiclista1 > tiempoEnCarreraCiclista2) {
        return -1;
      }
      return 0;
    });
    return ciclistasOrdenados.map((c, index) => ({
      nombre: c.nombre,
      posicion: index + 1,
      tiempo: this.calcularTiempoCiclista(c),
    }));
  }
}