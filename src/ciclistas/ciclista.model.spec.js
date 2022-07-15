const Ciclista = require('./ciclista.model');

const etapa = {
    calcularTiempo: function(kilometros){
        return 10*kilometros;
    }
}

const dado = {
    lanzar: function(){
        return 10;
    }
}
describe('Ciclista class', () => {
    let ciclista, result;
    beforeEach(() => {
        ciclista = new Ciclista(etapa, dado);
    });
describe('avanzarKilometros', () => {
    test('should return 20', () => {
        
    });
});    
});
