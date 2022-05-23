const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
    return knex('wards').where('Wards_ID', id).first()
}
const getAll = () => {
    return knex.select('wards.*', 'township.Township_Code', 'village.Village_Code', 'town.Town_Code').from('wards')
        .leftJoin('village', 'wards.Wards_Code', 'village.Village_Code')
        .leftJoin('township', 'wards.Township_Code', 'township.Township_Code')
        .leftJoin('town','wards.Town_Code','town.Town_Code')
        .where('wards.Status', 'Active')
        .orderBy('Wards_ID', 'desc')
}
const createWards = (values) => {
    return knex('wards').insert(values).then((res) => {
        return getById(res[0])
    })
}
const updateWards = (id, values) => {
    return knex('wards').where('Wards_ID', id).update(values).then(() => {
        return getById(id)
    })
}
const deleteWards = (id) => {
    return knex('wards').where('Wards_ID', id).update({Status:'Delete'})
}
module.exports = {
    getById,
    getAll,
    createWards,
    updateWards,
    deleteWards
}
