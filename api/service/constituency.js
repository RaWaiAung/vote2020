const config = require('../knexfile')
const knex = require(`knex`)(config)

const getById = (id) => {
   //return knex('constituency').where({'Constituency_ID':id,'Status':'Active'}).first()
   return knex('constituency').where('Constituency_ID',id)
   .leftJoin('township','constituency.Township_ID','township.Township_ID')
   .leftJoin('district','township.District_ID','district.District_ID')
   .leftJoin('state','district.State_ID','state.State_ID')
   .where('constituency.Status','Active').first()
}
const getAll = (search) => {
   let query =  knex.select('constituency.*','township.Township_Name','township.Township_ID')
   .from('constituency')
   .leftJoin('township','township.Township_ID','constituency.Constituency_ID')
   .where('constituency.Status','Active')
   .orderBy('Constituency_ID','desc')

    if(search && search.length > 0) {
        search.forEach(item => {
        if(item.name == 'Constituency_Name'){
            console.log('testing')
            query = query.where(`constituency.${item.name}`,'like',`%${item.value}%` )
        }else{
            query = query.where(`constituency.${item.name}`, item.value)
        }
            
        });
    }

    return query;  
 }

const createConstituency = (values) => {
    var partyIDList = values.Party_ID
    console.log(partyIDList,"partyIDList")
    delete values.Party_ID
    return knex('constituency').insert(values).then(async(result) => {
        let cons_id = result[0]
        console.log(cons_id,'cons')
        let list = []
        partyIDList.forEach(item => {
            list.push({  Party_ID:item , Constituency_ID:cons_id})
        });
       await knex('party_constituency').insert(list)
        return getById(cons_id)
    })
}
const updateConstituency = (id,values) => {
    return knex('constituency').where('Constituency_ID',id).update(values).then(() =>{
        return getById(id)
    })
}
const deleteConstituency = (id) => {
    return knex('constituency').where('Constituency_ID',id).update({Status:'Delete'})
}
module.exports = {
    getById,
    getAll,
    createConstituency,
    updateConstituency,
    deleteConstituency
}
