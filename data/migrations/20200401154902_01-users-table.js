exports.up = function(knex) {
  return knex.schema.createTable("data_users", table => {
    table //Primary key
      .increments("user_id")
      .primary()
      .unique()
      .notNullable();
    table //Unique username
      .string("username")
      .notNullable()
      .unique();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("fname").notNullable();
    table.string("lname").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("data_users");
};
