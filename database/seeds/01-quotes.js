exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        {id: 1, text: 'X', author: 'A', date: JSON.stringify(Date())},
        {id: 2, text: 'Y', author: 'B', date: JSON.stringify(Date())},
        {id: 3, text: 'Z', author: 'C', date: JSON.stringify(Date())}
      ]);
    });
};
