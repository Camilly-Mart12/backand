/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("locacoes", (table) => {
    table.increments("id").primary()
    table.string("titulo").notNullable()

    //relações
    table.integer("genero_id")
    .unsigned()
    .references("id")
    .inTable("generos")

     table.integer("diretores_id")
    .unsigned()
    .references("id")
    .inTable("filmes")

    table.date("alugado_em").notNullable()
     table.date("devolvido_em")

    table.timestamp(true,true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("locacoes")
};
