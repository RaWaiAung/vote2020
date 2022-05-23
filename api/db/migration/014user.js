
exports.up = function(knex) {
    return knex.schema.createTable('user', function (table) {
        table.increments('User_ID').primary().notNullable();
        table.string('User_Name',250).notNullable();
        table.string('Password',50).notNullable();
        table.string('Email',50).notNullable();
        table.string('Role',50).notNullable();
        table.string('Status',50).notNullable();
        table.string('Created_By',250).notNullable();
        table.timestamp('Created_At').defaultTo(knex.fn.now());
        table.string('Updated_By',250).notNullable();
        table.timestamp('Updated_At').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user')
};
