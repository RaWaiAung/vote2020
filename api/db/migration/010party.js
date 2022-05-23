
exports.up = function(knex) {
    return knex.schema.createTable('Party', function (table) {
        table.increments('Party_ID').primary().notNullable();
        table.string('Party_Name',250).notNullable();
        table.string('Description',250).notNullable();
        table.string('Created_By',250).notNullable();
        table.string('Updated_By',250).notNullable();
        table.timestamp('Created_At').defaultTo(knex.fn.now());
        table.timestamp('Updated_At').defaultTo(knex.fn.now());
        table.string('Status',50).notNullable();
        table.text('Remark');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Party')
};
