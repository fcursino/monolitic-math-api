const Operacoes = require('../../../shared/operacoes')

class AreaQuadradoUseCase {
    
    execute({
        l
    }) {
        let o = new Operacoes();

        const x = o.multiplicacao(l, l)

        return x;
        
    }
}

module.exports = AreaQuadradoUseCase;