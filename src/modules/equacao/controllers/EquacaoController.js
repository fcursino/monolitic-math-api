const ProporcaoDiretaUseCase = require("../useCases/ProporcaoDiretaUseCase");
const ProporcaoInversaUseCase = require("../useCases/ProporcaoInversaUseCase");

module.exports = class EquacaoController {

    calcularProporcaoDireta (req, res) {
        
        const proporcaoDiretaUseCase = new ProporcaoDiretaUseCase();
        const { a, b, c } = req.body

        const x = proporcaoDiretaUseCase.execute({
            a, b, c
        })

        return res.json(x);
    }

    calcularProporcaoInversa (req, res) {

        const proporcaoInversaUseCase = new ProporcaoInversaUseCase();
        const { a, b, c } = req.body

        const x = proporcaoInversaUseCase.execute({
            a, b, c
        })

        return res.json(x);
    }
}