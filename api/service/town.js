const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
    return knex('town').where('Town_ID',id).first()
}
// const getAll =(search) => {
//     //  return knex.select('*').from('district').orderBy('District_ID','desc')
//    let query = knex.select('town.*','township.Township_Name').from('town').leftJoin('township','town.Township_ID','township.Township_ID').orderBy('Town_ID','desc').where('Town.Status','Active').orderBy('Town_ID','desc')
//    if(search && search.length>0){
//     search.forEach(item =>{
//         query = query.where(`town.${item.name}`,item.value)
//     });
//    // query = query.where('district.State_ID',).where('district.District_ID',12)

//    }
//     return query;
//    }
const getAll =(search) => {
    //  return knex.select('*').from('district').orderBy('District_ID','desc')
   let query = knex.select('town.Town_ID','town.Town_Code','town.Town_Name','township.Township_Name','township.Township_Code').from('town').leftJoin('township','town.Township_ID','township.Township_ID')
   .orderBy('Town_ID','desc').where('Town.Status','Active').orderBy('Town_ID','desc')
   if(search && search.length>0){
    search.forEach(item =>{
        query = query.where(`township.${item.name}`,item.value)
    });
   // query = query.where('district.State_ID',).where('district.District_ID',12)

   }
    return query;
   }
const createTown = (values) => {
    return knex('town').insert(values).then((res) => {
        return getById(res[0])
    })
}
const updateTown = (id,values) => {
    return knex('town').where('Town_ID',id).update(values).then(() =>{
        return getById(id)
    })
}
const deleteTown = (id) => {
    return knex('town').where('Town_ID',id).update({Status:'Delete'})
}
module.exports = {
    getById,
    getAll,
    createTown,
    updateTown,
    deleteTown
}
