const knex = require('knex');

const config = require('./index');

const db = knex(config.development);

module.exports = db;