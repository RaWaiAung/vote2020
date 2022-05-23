const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
    return knex('voter').where({'Voter_ID':id, 'Status': 'Active'}).first()
}
const getAll = () => {
    return knex.select('*').from('voter').where('voter.Status','Active').orderBy('Voter_ID','desc')
}
const createVoter = (values) => {
    return knex('voter').insert(values).then((res) => {
        return getById(res[0])
    })
}
const updateVoter = (id,values) => {
    return knex('voter').where('Voter_ID',id).update(values).then(() =>{
        return getById(id)
    })
}
const deleteVoter = (id) => {
    return knex('voter').where('Voter_ID',id).update({Status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    createVoter,
    updateVoter,
    deleteVoter
}
