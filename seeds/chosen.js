
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('answersCards').del()
    .then(function () {
      // Inserts seed entries
      return knex('answersCards').insert([
        {id: 1, answer: 'Active listening',round_id: 500, player_id: 1,chosen: 'false' },
        {id: 2, answer: 'Justin Bieber',round_id: 500, player_id: 0, chosen: 'false'},
        {id: 3, answer: 'Shiny objects',round_id: 500, player_id: 0, chosen: 'false' },
        {id: 4, answer: 'Bees?',round_id: 500, player_id: 1, chosen: 'false' },
        {id: 5, answer: 'A little boy who wont shut the fuck up about dinosaurs',round_id: 500, player_id: 0, chosen: 'false' },
        {id: 6, answer: 'Daddy issues',round_id: 500, player_id: 0, chosen: 'false' },
        {id: 7, answer: 'Your weird brother',round_id: 500, player_id: 1, chosen: 'false' },
        {id: 8, answer: 'Mansplaining',round_id: 500, player_id: 0, chosen: 'false' },
        {id: 9, answer: 'Fear itself',round_id: 500, player_id: 0, chosen: 'false' },
        {id: 10, answer: 'Old-people smell',round_id: 500, player_id: 0,chosen: 'false' },
        {id: 11, answer: 'Knife crime',round_id: 500, player_id: 1, chosen: 'false' },
        {id: 12, answer: 'The economy',round_id: 500, player_id: 0, chosen: 'false' },
        {id: 13, answer: 'Being a dinosaur',round_id: 500, player_id: 0, chosen: 'false' },
        {id: 14, answer: 'Positive feedback',round_id: 500, player_id: 1, chosen: 'false' },
        {id: 15, answer: 'My check in',round_id: 500, player_id: 0, chosen: 'false' },
      ]);
    });
};
