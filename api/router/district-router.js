const Router = require('koa-router')
const config=require('../knexfile')
const districtService = require('../service/district')
const helper = require('../util/helper')

var knex = require('knex')(config)
const router = new Router()

router.get('/district', async(ctx) =>{
const {query} = ctx.request.query
const search = helper.transformQueryParams(query)
console.log(query,"Search")

    const data = await districtService.getAll(search)
    try{
        ctx.body = {
            status:200,
            data:data
        }
    }catch(error){
        ctx.body={
            status:400,
            data:error-message
        }
    }
})
router.get('/district/:id',async(ctx) =>{
    const id= ctx.params.id
    const data=await districtService.getById(id)
    try{
        ctx.body= {
            status:200,
            data:data
        }
    }
    catch(error){
        ctx,body={
            status:400,
            data:error-message

        }
    }
})
router.post('/district', async(ctx)=>{
    const values= ctx.request.body
    const result = await districtService.createDistrict(values)
    //const data=await knex('township').where('Township_ID',result).first()
    ctx.body = result
})
router.put('/district/:id',async(ctx)=>{
    const id = ctx.params.id
    const values=ctx.request.body
    const data=await districtService.updateDistrict(id,values)
    ctx.body=data
})
router.delete('/district/:id',async(ctx)=>{
    const id= ctx.params.id
    const data= await districtService.deleteById(id)
    console.log(data, 'data')
    if(data){
        ctx.body="Delete"
    }else{
        ctx.body="No Row found"
    }
})
module.exports=router