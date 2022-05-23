
exports.up = function(knex) {
    return knex.schema.createTable('Village_Tracts', function (table) {
        table.increments('Village_Tracts_ID').primary().notNullable();

        table.integer("Township_ID").unsigned().notNullable();
        table.foreign("Township_ID").references("Township_ID").inTable("Township");
        
        table.string('Village_Tracts_Code',250).unique().notNullable();
        table.string('Village_Tracts_Name',250).notNullable();
        table.string('Created_By',250).notNullable();
        table.timestamp('Created_At').defaultTo(knex.fn.now());
        table.string('Updated_By',250).notNullable();
        table.timestamp('Updated_At').defaultTo(knex.fn.now());
        table.string('Status',50).notNullable();
        table.text('Remark');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Village_Tracts')
};
