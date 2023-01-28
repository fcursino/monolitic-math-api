const Operacoes = require('../../../shared/operacoes')

class ProporcaoDiretaUseCase {
    
    execute({
        a, b, c
    }) {
        let o = new Operacoes();

        const ax = o.multiplicacao(b, c)
        const x = o.divisao(ax, a)

        return x;
        
    }
}

module.exports = ProporcaoDiretaUseCase;