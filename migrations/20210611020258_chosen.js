
exports.up = function(knex) {
    return knex.schema.table('answersCards', (table) => {
        table.boolean('chosen');
        
      })
};

exports.down = function(knex) {
    return knex.schema.table('answersCards', function (table) {
        table.dropColumn('chosen')
    })
};