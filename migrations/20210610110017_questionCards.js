
exports.up = function(knex) {
    return knex.schema.createTable('questionCards', (table) => {
        table.increments('id').primary();
        table.string('question');
        table.integer('round_id');
      })
};
  


exports.down = function(knex) {
    return knex.schema.dropTable('questionCards')
};
