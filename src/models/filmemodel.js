const connection = require("../database/connection") 

const filmemodel = {
    async findAll(){
        const result = await connection.raw("SELECT * FROM generos")

        return result
    
    },
    async create(filme, generos){
        const { titulo, diretorId } = filme

        const inserefilme = await connection.raw(
            "INSERT INTO filme (titulo, director_id) VALUES (?, ?)",
            [titulo, diretorId]
        )
        
        const filmeid = inserefilme.lastId

        if (generos && generos.length > 0) {
            for ( const generoId of generos ) {
                await connection.raw(
                    "INSERT INTO filmes_generos (filme_id, genero_id) VALUES (?, ?)"
                    [ filmeid, generoId]
                )
            }
        }
     return filmeid
    },
    async findById( id ){
        const filmeResult = await connection.raw(
            "SELECT * FROM filmes WHERE id = ?",
            [ id ]
        )

        const filme = filmeResult [0]

        if (!filme) return null
        
    
    const generos = await connection.raw (`
        SELELECT g.id, g.nome FROM generos g
        JOIN filmes_generos fg ON g.id = fg.genero_id
        WHERE fg.filme_id = ?
        `, [ id ] )
    
    return {
        ...filme,
        generos

    }
    }
    
    

}


module.exports = filmemodel