const NUM_KILOMETROS = 10;
class Dado {
lanzar(){
    const avance = Math.floor(Math.random()*NUM_KILOMETROS+1);
    return avance;
}
}

module.exports = Dado;