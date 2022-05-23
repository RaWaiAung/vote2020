
exports.up = function(knex) {
    return knex.schema.createTable('Office', function (table) {
        table.increments('Office_ID').primary().notNullable();

        table.integer("Party_ID").unsigned().notNullable();
        table.foreign("Party_ID").references("Party_ID").inTable("Party");

        table.string('Office_Name',250).notNullable();
        table.string('Address',250).notNullable();
        table.string('PONO',15).notNullable();
        table.string('PHNO1',15).notNullable();
        table.string('PHNO2',15).notNullable();
        table.string('Email',30).notNullable();
        table.string('Building_Type',50).notNullable();
        table.string('Own_or_Rental',10).notNullable();
        table.string('Created_By',250).notNullable();
        table.timestamp('Created_At').defaultTo(knex.fn.now());
        table.string('Updated_By',250).notNullable();
        table.timestamp('Updated_At').defaultTo(knex.fn.now());
        table.string('Status',50).notNullable();
        table.text('Remark');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Office')
};
