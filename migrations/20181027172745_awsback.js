
exports.up = function(knex) {
  return knex.schema.createTable('awsback', (table)=>{
    table.increments();
    table.string('title', 264)
    table.string('description', 264).notNullable()
    table.text('url');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('awsback');
};
