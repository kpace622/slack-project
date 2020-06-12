const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-34-202-88-122.compute-1.amazonaws.com',
        database: 'test',
        password: process.env.PASSWORD
    }
})

module.exports = knex;