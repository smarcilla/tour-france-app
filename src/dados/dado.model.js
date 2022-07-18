const NUM_KILOMETROS = 10;
export class Dado {
  lanzar() {
    const avance = Math.floor(Math.random() * NUM_KILOMETROS + 1);
    return avance;
  }
}
