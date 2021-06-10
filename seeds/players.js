
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('player').del()
    .then(function () {
      // Inserts seed entries
      return knex('player').insert([
        {id: 1, name: ''},
        {id: 2, name: ''},
        {id: 3, name: ''}
      ]);
    });
};
 