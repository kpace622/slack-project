// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'process.env.DATABASE_URL'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
        // host: 'ec2-34-202-88-122.compute-1.amazonaws.com',
        // database: 'd745d89pjuobqb',
        // user: 'zmbcjnizeemnbp',
        // port: 5432,
        // password: process.env.PASSWORD

    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
