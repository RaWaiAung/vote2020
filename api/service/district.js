const config=require('../knexfile')
var knex = require('knex')(config)
const getById = (id) => {
    return knex('district').where({'District_ID':id, 'Status': 'Active'}).first()
}
const getAll =(search) => {
    //  return knex.select('*').from('district').orderBy('District_ID','desc')
   let query = knex.select('district.*','state.State_Region').from('district').leftJoin('state','district.State_ID','state.State_ID').orderBy('District_ID','desc').where('district.Status','Active').orderBy('District_ID','desc')
   if(search && search.length>0){
    search.forEach(item =>{
        query = query.where(`district.${item.name}`,item.value)
    });
     }
    return query;
   }
const updateDistrict= (id,values) =>{
    return knex('district').where('District_ID',id).update(values).then(()=>{
        return getById(id)
    })
}
const createDistrict = (values) => {
    return knex('district').insert(values).then((res)=>{
        return getById(res[0])
})
}
const deleteById =(id) => {
    return knex('district').where('District_ID',id).update({Status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    createDistrict,
    updateDistrict,
    deleteById
}