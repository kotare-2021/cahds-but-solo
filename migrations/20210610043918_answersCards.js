
exports.up = function(knex) {
    return knex.schema.createTable('answersCards', (table) => {
        table.increments('id').primary();
        table.string('answer');
        table.integer('round_id');
        table.integer('player_id')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('answersCards')
};
