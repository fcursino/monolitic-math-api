const AreaCirculoUseCase = require("../useCases/AreaCirculoUseCase");
const AreaQuadradoUseCase = require("../useCases/AreaQuadradoUseCase");
const AreaTrianguloUseCase = require("../useCases/AreaTrianguloUseCase");

module.exports = class GeometriaController {

    calcularAreaCirculo (req, res) {

        const areaCirculoUseCase = new AreaCirculoUseCase();
        const { r } = req.body

        const x = areaCirculoUseCase.execute({
            r
        })

        return res.json(x);
    }

    calcularAreaQuadrado (req, res) {

        const areaQuadradoUseCase = new AreaQuadradoUseCase();
        const { l } = req.body

        const x = areaQuadradoUseCase.execute({
            l
        })

        return res.json(x);
    }

    calcularAreaTriangulo (req, res) {

        const areaTrianguloUseCase = new AreaTrianguloUseCase();
        const { a, b } = req.body

        const x = areaTrianguloUseCase.execute({
            a, b
        })

        return res.json(x);
    }
}