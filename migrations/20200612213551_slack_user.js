
exports.up = function(knex) {
  return knex.schema.createTable('slack_user', tbl => {
      tbl.string('slack_user', 255).unique().notNullable();
      tbl.integer('user_id')
      .references('users.id')
      .unsigned()
      .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('slack_user')
};
