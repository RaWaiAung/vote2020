
exports.up = function(knex) {
    return knex.schema.createTable('Village', function (table) {
        table.increments('Village_ID').primary().notNullable();

        table.integer("Village_Tracts_ID").unsigned().notNullable();
        table.foreign("Village_Tracts_ID").references("Village_Tracts_ID").inTable("Village_Tracts");
        
        table.string('Village_Code',250).unique().notNullable();
        table.string('Village_Name',250).notNullable();
        table.string('Created_By',250).notNullable();
        table.timestamp('Created_At').defaultTo(knex.fn.now());
        table.string('Updated_By',250).notNullable();
        table.timestamp('Updated_At').defaultTo(knex.fn.now());
        table.string('Status',50).notNullable();
        table.text('Remark');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Village')
};
