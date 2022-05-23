
exports.up = function(knex) {
    return knex.schema.createTable('Party_Constituency', function (table) {
        table.increments('PC_ID').primary().notNullable();

        table.integer("Constituency_ID").unsigned().notNullable();
        table.foreign("Constituency_ID").references("Constituency_ID").inTable("Constituency");
        
        table.integer("Party_ID").unsigned().notNullable();
        table.foreign("Party_ID").references("Party_ID").inTable("Party");

        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("Party_Constituency")
};
