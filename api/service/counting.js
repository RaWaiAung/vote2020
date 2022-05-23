const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
    return knex('candidate').where({'Candidate_ID':id,'Status':'Active'}).first()
}

const getAll = (search) => {
     let query=knex('candidate').count('Candidate_ID',{as:'Candidate_ID'}).select('party.Party_ID','party.Party_Name')
     .from('candidate').leftJoin('party','party.Party_ID','candidate.Party_ID')
     .groupBy("candidate.Party_ID")
         if(search && search.length > 0) {
            search.forEach(item => {
            if(item.name == 'Party_ID'){
                query = query.where(`candidate.${item.name}`, item.value)
            }
                
            });
        }
        return query;
 }
 
module.exports = {
    getById,
    getAll,
}
