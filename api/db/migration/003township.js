
exports.up = function(knex) {
    return knex.schema.createTable('Township', function (table) {
        table.increments('Township_ID').primary().notNullable();

        table.integer("District_ID").unsigned().notNullable();
        table.foreign("District_ID").references("District_ID").inTable("District");
        
        // table.integer("State_ID").unsigned().notNullable();
        // table.foreign("State_ID").references("State_ID").inTable("State");
        
        table.string('Township_Code',250).unique().notNullable();
        table.string('Township_Name',250).notNullable();
        table.string('Created_By',250).notNullable();
        table.timestamp('Created_At').defaultTo(knex.fn.now());
        table.string('Updated_By',250).notNullable();
        table.timestamp('Updated_At').defaultTo(knex.fn.now());
        table.string('Status',50).notNullable();
        table.text('Remark');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Township')
};
