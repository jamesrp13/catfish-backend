const tname = "data_instances";
exports.up = function(knex) {
  return knex.schema.createTable(tname, table => {
    table
      .increments("instance_id")
      .primary()
      .unique()
      .notNullable();
    table.string("title").notNullable();
    table.timestamps(true, false);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists(tname);
};
