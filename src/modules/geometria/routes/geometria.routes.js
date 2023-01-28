const {Router} = require('express')
const GeometriaController = require('../controllers/GeometriaController')

const geometriaRouter = Router()

const geometriaController = new GeometriaController();

geometriaRouter.post('/geometria/area-circulo',
geometriaController.calcularAreaCirculo)

geometriaRouter.post('/geometria/area-quadrado',
geometriaController.calcularAreaQuadrado)

geometriaRouter.post('/geometria/area-triangulo',
geometriaController.calcularAreaTriangulo)

module.exports = geometriaRouter;