
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questionCards').del()
    .then(function () {
      // Inserts seed entries
      return knex('QuestionCards').insert([
        {id: 1, question: 'During his midlife crisis, my dad got really into ____.', round_id: 1},
        {id: 2, question: 'A successful job interview begins with a firm handshake and ends with ____.', round_id: 2},
        {id: 3, question: 'My plan for world domination begins with ____.', round_id: 3},
        {id: 4, question: 'When I am Prime Minister, I will create the Ministry of ____.', round_id: 4},
        {id: 5, question: 'My gym teacher got fired for adding ____ to the obstacle course.', round_id: 5},
      ]);
    });
};
