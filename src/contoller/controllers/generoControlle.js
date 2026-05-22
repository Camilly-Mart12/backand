const GeneroModel = require("../models/generomodel")

const GeneroController = {
    async getAllgeneros(req, res){
        const generos = await GeneroModel.findall()

        return res.json(generos)

    },
    async creategenero (req, res) {
    const { nome } = req.body

    const genero = await generomodel.create({
        nome
    })

    return res.status(201).json(genero)
}


}

module.exports= GeneroController
   