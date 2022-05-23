const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
    return knex('village_tracts').where('Village_Tracts_ID',id).first()
}

    const getAll =(search) => {
    //  return knex.select('*').from('district').orderBy('District_ID','desc')
   let query = knex.select('village_tracts.*','township.Township_Code').from('village_tracts')
   .leftJoin('township','village_tracts.Township_ID','township.Township_ID')
   .orderBy('Village_Tracts_ID','desc').where('village_tracts.Status','Active')
   if(search && search.length>0){
    search.forEach(item =>{
        query = query.where(`township.${item.name}`,item.value)
    });
   // query = query.where('district.State_ID',).where('district.District_ID',12)

   }
    return query;
   }
const createVillageTracts = (values) => {
    return knex('village_tracts').insert(values).then((res) => {
        return getById(res[0])
    })
}
const updateVillageTracts = (id,values) => {
    return knex('village_tracts').where('Village_Tracts_ID',id).update(values).then(() =>{
        return getById(id)
    })
}
const deleteVillageTracts = (id) => {
    return knex('village_tracts').where('Village_Tracts_ID',id).update({Status:'Delete'})
}
module.exports = {
    getById,
    getAll,
    createVillageTracts,
    updateVillageTracts,
    deleteVillageTracts
}
