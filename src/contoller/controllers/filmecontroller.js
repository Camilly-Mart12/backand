const FilmeModel = require("../models/FilmeModel")

const FilmeController = {
    async getallFilmes (req, res) {
        const filmes = await FilmeModel.findAll()

        return response.json(filmes)
    },
    async createFilme( req, res ) {
        const {
            titulo,
            diretorid,
            genero,
        }  = req.body

        const filme = await FilmeModel.create(
            {
                titulo,
                diretorid
            },
            generos
        )
        return res.status(201).json({ id: filmeId})
    }
    
}

module.exports = FilmeController