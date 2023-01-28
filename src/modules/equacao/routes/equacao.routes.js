const {Router} = require('express')
const EquacaoController = require('../controllers/EquacaoController')

const equacaoRouter = Router()

const equacaoController = new EquacaoController();

equacaoRouter.post('/equacao/proporcao-inversa',
equacaoController.calcularProporcaoInversa)

equacaoRouter.post('/equacao/proporcao-direta',
equacaoController.calcularProporcaoDireta)

module.exports = equacaoRouter;