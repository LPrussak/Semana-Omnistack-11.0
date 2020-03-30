const knex = require('knex');
const configuration = require('../../knexfile') //importa conf. do knexfile

const connection = knex(configuration.development)//define ambiente para dev

module.exports = connection;