
exports.up = function(knex) {
    return knex.schema.createTable('District', function (table) {
        table.increments('District_ID').primary().notNullable();

        table.integer("State_ID").unsigned().notNullable();
        table.foreign("State_ID").references("State_ID").inTable("State");
        
        table.string('District_Code',30).unique().notNullable();
        table.string('District_Name',250).notNullable();
        table.string('Created_By',250).notNullable();
        table.timestamp('Created_At').defaultTo(knex.fn.now());
        table.string('Updated_By',250).notNullable();
        table.timestamp('Updated_At').defaultTo(knex.fn.now());
        table.string('Status',50).notNullable();
        table.text('Remark');
        })
    };
  

exports.down = function(knex) {
    return knex.schema.dropTable('District')
};
