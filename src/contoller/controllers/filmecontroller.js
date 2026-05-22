const FilmeModel = require("../models/FilmeModel")

const Filmecontroller = {
    async getallFilmes (req, res) {
        const filmes = await FilmeModel.findAll()

        return response.json(filmes)
    }
}

module.exports = FilmeController