
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('player').del()
    .then(function () {
      // Inserts seed entries
      return knex('player').insert([
        {id: 1, Name: ''},
        {id: 2, Name: ''},
        {id: 3, Name: ''}
      ]);
    });
};
