const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'test',
    }
})

module.exports = knex;