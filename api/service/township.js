const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
    return knex('township').where('Township_ID',id).first()
}
const getAll = (search) => {
    //return knex.select('*').from('township').orderBy('Township_ID','desc')
    let query = knex.select('township.*','district.District_Name',).from('township')
    .leftJoin('district','township.District_ID','district.District_ID')
    .where('township.Status','Active')
    .orderBy('Township_ID','desc')
    if(search && search.length>0){
        search.forEach(item =>{
            query = query.where(`township.${item.name}`,item.value)
        });
    
       }
        return query;
}
const createTownship = (values) => {
    return knex('township').insert(values).then((res) => {
        return getById(res[0])
    })
}
const updateTownship = (id,values) => {
    return knex('township').where('Township_ID',id).update(values).then(() =>{
        return getById(id)
    })
}
const deleteTownship = (id) => {
    return knex('township').where('Township_ID',id).update({Status:'Delete'})
}
module.exports = {
    getById,
    getAll,
    createTownship,
    updateTownship,
    deleteTownship
}
