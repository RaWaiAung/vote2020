const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
    return knex('candidate').where({'Candidate_ID':id,'Status':'Active'}).first()
}
const getAll = (search) => {
    let query =  knex.select('candidate.*','party.Party_Name').from('candidate')
    .leftJoin('party','party.Party_ID','candidate.Party_ID')
    .where('candidate.Status','Active')
    .orderBy('Candidate_ID','desc')
    if(search && search.length>0){
        search.forEach(item =>{
            query = query.where(`candidate.${item.name}`,item.value)
        });
    
       }
        return query;
}
    
const createCandidate = (values) => {
    return knex('candidate').insert(values).then((res) => {
        return getById(res[0])
    })
}
const updateCandidate = (id,values) => {
    return knex('candidate').where('Candidate_ID',id).update(values).then(() =>{
        return getById(id)
    })
}
const deleteCandidate = (id) => {
    return knex('candidate').where('Candidate_ID',id).update({Status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    createCandidate,
    updateCandidate,
    deleteCandidate
}
