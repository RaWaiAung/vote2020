const config=require('../knexfile')
var knex = require('knex')(config)
const getById = (id) => {
    return knex('state').where({'State_ID':id, 'Status':'Active'}).first()
}
const getAll = () => {
    return knex.select('*').from('state').where('Status','Active').orderBy('State_ID','desc')
}
const updateState= (id,values) =>{
    return knex('state').where('State_ID',id).update(values).then(()=>{
        return getById(id)
    })
}
const createState = (values) => {
    return knex('state').insert(values).then((res)=>{
        return getById(res[0])
})
}
 const deleteById =(id) => {
 return knex('state').where('State_ID',id).update({Status: 'Delete'})
 }

module.exports = {
    getById,
    getAll,
    createState,
    updateState,
    deleteById
}