exports.up = function(knex) {
    return knex.schema.createTable('State', function (table) {
    table.increments('State_ID').primary().notNullable();
    table.string('State_Code',10).unique().notNullable();
    table.string('State_Region',50).notNullable();
    table.string('Created_By',250).notNullable();
    table.timestamp('Created_At').defaultTo(knex.fn.now());
    table.string('Updated_By',250).notNullable();
    table.timestamp('Updated_At').defaultTo(knex.fn.now());
    table.string('Status',50).notNullable();
    table.text('Remark');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('State')
};
