class Etapa {
    constructor(longitud, dificultad) {
        this.dificultad = dificultad
        this.longitud = longitud
        this.tiempoLimite = dificultad * longitud
    }
    calcularTiempo(kilometros) {
        return this.dificultad * kilometros;
    }

    calcularTiempoGanador(ciclista) {
        const tiempoActualCiclista = ciclista.obtenerTiempoEnCarrera();
        if (tiempoActualCiclista > this.tiempoLimite) {
            this.tiempoLimite = tiempoActualCiclista;
        }
        return this.tiempoLimite - ciclista.obtenerTiempoEnCarrera()
    }
    calcularClasificacion(ciclistas) {
        const ciclistasOrdenados = ciclistas.sort((ciclista1, ciclista2) => {
            const tiempoEnCarreraCiclista1 = ciclista1.obtenerTiempoEnCarrera();
            const tiempoEnCarreraCiclista2 = ciclista2.obtenerTiempoEnCarrera();
            if (tiempoEnCarreraCiclista1 < tiempoEnCarreraCiclista2) {
                return 1;
            }
            if (tiempoEnCarreraCiclista1 > tiempoEnCarreraCiclista2) {
                return -1;
            }
            return 0;
        })
        return ciclistasOrdenados.map((c, index) => ({ nombre: c.nombre, posicion: index + 1, tiempo: this.calcularTiempoGanador(c) }))
    }
}

module.exports = Etapa;