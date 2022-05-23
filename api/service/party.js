const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
    return knex('party').where({'Party_ID':id, 'Status':'Active'}).first()
}
const getAll = () => {
    return knex.select('*').from('party').where('Status','Active').orderBy('Party_ID','desc')
    // return knex.select('party.*','constituency.Constituency_Name').from('party')
    // .leftJoin('candidate','constituency.Constituency_Name','party.Constituency_Name')
    // .orderBy('Party_ID','desc')
    // .where('party.Status','Active');
}
const createParty = (values) => {
    return knex('party').insert(values).then((res) => {
        return getById(res[0])
    })
}
const updateParty = (id,values) => {
    return knex('party').where('Party_ID',id).update(values).then(() =>{
        return getById(id)
    })
}
const deleteParty = (id) => {
    return knex('party').where('Party_ID',id).update({Status:'Delete'})
}
module.exports = {
    getById,
    getAll,
    createParty,
    updateParty,
    deleteParty
}
