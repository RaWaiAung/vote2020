const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
    return knex('village').where('Village_ID',id).first()
}
const getAll =(search) => {
    //  return knex.select('*').from('district').orderBy('District_ID','desc')
   let query = knex.select('village.*','village_tracts.Village_Tracts_Code').from('village').leftJoin('village_tracts','village_tracts.Village_Tracts_ID','village.Village_Tracts_ID').orderBy('Village_ID','desc').where('village.Status','Active').orderBy('Village_ID','desc')
   if(search && search.length>0){
    search.forEach(item =>{
        query = query.where(`village_tracts.${item.name}`,item.value)
    });
   // query = query.where('district.State_ID',).where('district.District_ID',12)

   }
    return query;
   }
const createVillage = (values) => {
    return knex('village').insert(values).then((res) => {
        return getById(res[0])
    })
}
const updateVillage = (id,values) => {
    return knex('village').where('Village_ID',id).update(values).then(() =>{
        return getById(id)
    })
}
const deleteVillage = (id) => {
    return knex('village').where('Village_ID',id).update({Status:'Delete'})
}
module.exports = {
    getById,
    getAll,
    createVillage,
    updateVillage,
    deleteVillage
}
