const Operacoes = require('../../../shared/operacoes')

class ProporcaoInversaUseCase {
    
    execute({
        a, b, c
    }) {
        let o = new Operacoes();
        
        const bx = o.multiplicacao(a, c)
        const x = o.divisao(bx, b)

        return x;
        
    }
}

module.exports = ProporcaoInversaUseCase;