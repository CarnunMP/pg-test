
exports.up = function(knex) {
  return knex.schema.createTable('quotes', table => {
    table.increments();
    table.string('text', 1024)
      .notNullable();
    table.string('author', 256)
      .notNullable();
    table.string('date', 256)
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('quotes');
};
