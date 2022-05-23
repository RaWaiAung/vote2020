const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
    return knex('user').where({'id':id,'Status':'Active'}).first()
}

const getUserById = (username) =>{
    return knex('user').where('username' , username).first()
}

const getAll = () => {
    return knex.select('*').from('user').where('user.status','Active').orderBy('id','desc')
}
const createUser = (values) => {
    return knex('user').insert(values).then((res) => {
        return getById(res[0])
    })
}
const updateUser = (id,values) => {
    return knex('user').where('id',id).update(values).then(() =>{
        return getById(id)
    })
}
const deleteUser = (id) => {
    return knex('user').where('id',id).update({Status:'Delete'})
}
module.exports = {
    getById,
    getUserById,
    getAll,
    createUser,
    updateUser,
    deleteUser
}
