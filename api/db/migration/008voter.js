
exports.up = function(knex) {
    return knex.schema.createTable('Voter', function (table) {
        table.increments('Voter_ID').primary().notNullable();

        table.string('Wards_Code');
        table.string('Village_Code');

        table.string('Voter_Name',50).notNullable();
        table.string('NRIC_No',50).notNullable();
        table.date('Date_Of_Birth').notNullable();
        table.string('Race',250).notNullable();
        table.string('Religion',30).notNullable();
        table.string('Permanent_Address',250).notNullable();
        table.string('Created_By',250).notNullable();
        table.timestamp('Created_At').defaultTo(knex.fn.now());
        table.string('Updated_By',250).notNullable();
        table.timestamp('Updated_At').defaultTo(knex.fn.now());
        table.string('Status',50).notNullable();
        table.text('Remark');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Voter')
};
