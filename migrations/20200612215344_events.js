
exports.up = function(knex) {
    return knex.schema.createTable('events', tbl => {
    tbl.increments();
    tbl.string('type', 255);
    tbl.string('text', 255);
    tbl.string('slack_user', 255)
        .references('slack_user.slack_user')
        .onDelete('CASCADE');
    tbl.string('team', 255);
    tbl.string('channel', 255);
    tbl.timestamp('timestamp', (useTz=true));
    tbl.timestamp('event_timestamp', (useTz=true));
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events')
};
