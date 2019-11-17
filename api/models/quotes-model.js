const db = require('../../database/db-config');

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove
}

function find() {
  return db('quotes');
}

function findBy(filter) {
  return db('quotes')
    .where(filter)
    .first();
}

function findById(id) {
  return db('quotes')
    .where({ id })
    .first();
}

async function add(quote) {
  const [id] = await db('quotes').insert(quote, 'id');

  return db('quotes')
    .where({ id })
    .first();
}

async function remove(id) {
  const quote = await findById(id);

  db('quotes')
    .where({ id })
    .del();

  return quote;
}