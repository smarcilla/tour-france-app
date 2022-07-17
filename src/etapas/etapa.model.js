const { toHaveStyle } = require("@testing-library/jest-dom/dist/matchers");

class Etapa {
    constructor(longitud, dificultad) {
        this.dificultad = dificultad
        this.longitud = longitud
        this.tiempoLimite = dificultad * longitud
        this.etapaTerminada = false;
    }
    calcularTiempo(kilometros) {
        return this.dificultad * kilometros;
    }

    calcularTiempoGanador(ciclista) {
        const tiempoActualCiclista = ciclista.obtenerTiempoEnEtapa();
        if (tiempoActualCiclista > this.tiempoLimite) {
            this.tiempoLimite = tiempoActualCiclista;
            this.etapaTerminada = true;
        }
        return this.tiempoLimite - ciclista.obtenerTiempoEnEtapa()
    }
    calcularClasificacion(ciclistas) {
        const ciclistasOrdenados = ciclistas.sort((ciclista1, ciclista2) => {
            const tiempoEnCarreraCiclista1 = ciclista1.obtenerTiempoEnEtapa();
            const tiempoEnCarreraCiclista2 = ciclista2.obtenerTiempoEnEtapa();
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
    terminada() {
        return this.etapaTerminada
    }
}

module.exports = Etapa;