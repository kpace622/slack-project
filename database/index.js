const knex = require('knex')({
    client: 'postgresql',
    connection: {
        host: 'ec2-34-202-88-122.compute-1.amazonaws.com',
        database: 'd745d89pjuobqb',
        user: 'zmbcjnizeemnbp',
        port: 5432,
        password: process.env.PASSWORD
    }
})

module.exports = knex;