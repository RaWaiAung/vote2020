
exports.up = function(knex) {
    return knex.schema.createTable('Candidate', function (table) {
        table.increments('Candidate_ID').primary().notNullable();
        
        table.integer("Party_ID").unsigned().notNullable();
        table.foreign("Party_ID").references("Party_ID").inTable("Party");

        table.string('Candidate_Name',250).notNullable();
        table.string('Image').notNullable();
        table.string('Election_Name',250).notNullable();
        table.string('Race',250).notNullable();
        table.string('Religion',250).notNullable();
        table.date('Date_Of_Birth').notNullable();
        table.string('Education',250).notNullable();
        table.string('Occupation',250).notNullable();
        table.string('NRIC_No',30).notNullable();
        table.string('Permanent_address',250).notNullable();
        table.string('Why_to_be_a_candidate',250).notNullable();
        table.string('Created_By',250).notNullable();
        table.timestamp('Created_At').defaultTo(knex.fn.now());
        table.string('Updated_By',250).notNullable();
        table.timestamp('Updated_At').defaultTo(knex.fn.now());
        table.string('Status',50).notNullable();
        table.text('Remark');
        })
  
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Candidate')
};
