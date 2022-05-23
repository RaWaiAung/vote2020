
exports.up = function(knex) {
    return knex.schema.createTable('Wards', function (table) {
        table.increments('Wards_ID').primary().notNullable();

        table.string("Township_Code").notNullable();
        table.string("Town_Code");
        table.string("Village_Code");

        table.string('Wards_Code',250).notNullable();
        table.string('Wards_Name',250).notNullable();
        table.string('Created_By',250).notNullable();
        table.timestamp('Created_At').defaultTo(knex.fn.now());
        table.string('Updated_By',250).notNullable();
        table.timestamp('Updated_At').defaultTo(knex.fn.now());
        table.string('Status',50).notNullable();
        table.text('Remark');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Wards')
};
