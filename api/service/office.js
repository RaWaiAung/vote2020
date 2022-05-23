const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
    return knex('office').where({'Office_ID':id,'Status':'Active'}).first()
}
const getAll = (search) => {
    let query = knex.select('office.*','party.Party_Name').from('office')
    .leftJoin('party','party.Party_ID','office.Party_ID')
    .where('office.Status','Active').orderBy('Office_ID','desc')
    if(search && search.length > 0) {
        search.forEach(item => {
        if(item.name == 'Office_Name'){
            query = query.where(`office.${item.name}`,'like',`%${item.value}%` )
        }else{
            query = query.where(`office.${item.name}`, item.value)
        }
            
        });
    }

    return query;
}
const createOffice = (values) => {
    return knex('office').insert(values).then((res) => {
        return getById(res[0])
    })
}
const updateOffice = (id,values) => {
    return knex('office').where('Office_ID',id).update(values).then(() =>{
        return getById(id)
    })
}
const deleteOffice = (id) => {
    return knex('office').where('Office_ID',id).update({Status:'Delete'})
}
module.exports = {
    getById,
    getAll,
    createOffice,
    updateOffice,
    deleteOffice
}
