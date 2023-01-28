const Operacoes = require('../../../shared/operacoes')

class AreaTrianguloUseCase {
    
    execute({
        a, b
    }) {
        let o = new Operacoes();

        const c = o.multiplicacao(a, b)
        const x = o.divisao(c, 2)

        return x;
        
    }
}

module.exports = AreaTrianguloUseCase;