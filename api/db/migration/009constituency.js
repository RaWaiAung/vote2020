
exports.up = function(knex) {
    return knex.schema.createTable('Constituency', function (table) {
        table.increments('Constituency_ID').primary().notNullable();

        table.integer("Township_ID").unsigned().notNullable();
        table.foreign("Township_ID").references("Township_ID").inTable("Township");

        table.string('Constituency_Name',250).notNullable();
        table.string('Election_Name',250).notNullable();
        table.string('Code1',10).unique().notNullable();
        table.string('Code2',10).unique().notNullable();
        table.string('Created_By',250).notNullable();
        table.string('Updated_By',250).notNullable();
        table.timestamp('Created_At').defaultTo(knex.fn.now());
        table.timestamp('Updated_At').defaultTo(knex.fn.now());
        table.string('Status',50).notNullable();
        table.text('Remark');
        })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Constituency')
  
};
