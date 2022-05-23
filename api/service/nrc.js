const config=require('../knexfile')
var knex = require('knex')(config)
const getById = (id) => {
    return knex('nrc').where({'id':id})
}
const getAll = () => {
    return knex.select('*').from('nrc').orderBy('id','desc')
}
// const updateState= (id,values) =>{
//     return knex('nrc').where('id',id).update(values).then(()=>{
//         return getById(id)
//     })
// }
// const createState = (values) => {
//     return knex('nrc').insert(values).then((res)=>{
//         return getById(res[0])
// })
// }
//  const deleteById =(id) => {
//  return knex('nrc').where('State_ID',id).update({Status: 'Delete'})
//  }

module.exports = {
    getById,
    getAll,
    // createState,
    // updateState,
    // deleteById
}