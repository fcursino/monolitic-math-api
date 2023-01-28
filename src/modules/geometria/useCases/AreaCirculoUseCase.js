const Operacoes = require('../../../shared/operacoes')

class AreaCirculoUseCase {
    
    execute({
        r
    }) {
        let o = new Operacoes();

        const rq = o.multiplicacao(r, r)
        const x = o.multiplicacao(3.14, rq)

        return x;
        
    }
}

module.exports = AreaCirculoUseCase;