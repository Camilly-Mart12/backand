const connection = require("../database/connection") 

const generomodel = {
    async findAll(){
        const result = await connection.raw("SELECT * FROM generos")

        return result
    
    },
    async create(data){
        const { nome } = data

        const result = await connection.raw(
            "INSERT INTO generos (nome) VALUES (?)",
            [nome]
        )
        [nome]
    }

}


module.exports = generomodel