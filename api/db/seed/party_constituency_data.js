const partyConstituencyList = [
  {PC_ID: 1,Constituency_ID: 1,Party_ID: 1},
  {PC_ID: 2,Constituency_ID: 7,Party_ID: 3},
  {PC_ID: 3,Constituency_ID: 9,Party_ID: 5},
  {PC_ID: 4,Constituency_ID: 6,Party_ID: 4},
  {PC_ID: 5,Constituency_ID: 3,Party_ID: 2},
  {PC_ID: 6,Constituency_ID: 5,Party_ID: 9},  
  {PC_ID: 7,Constituency_ID: 2,Party_ID: 7},  
  {PC_ID: 8,Constituency_ID: 4,Party_ID: 6},  
  {PC_ID: 9,Constituency_ID: 10,Party_ID: 8},  
  {PC_ID: 10,Constituency_ID: 8,Party_ID: 10}
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('party_constituency').del()
    .then(function () {
      // Inserts seed entries
      return knex('party_constituency').insert(partyConstituencyList)
    });
};
