const Router = require('koa-router')
const config=require('../knexfile')
const stateService = require('../service/state')

var knex = require('knex')(config)
const router = new Router()

router.get('/state', async(ctx) =>{
    const data = await stateService.getAll()
    ctx.body = data;
})
router.get('/state/:id',async(ctx) =>{
    const id= ctx.params.id
    const data=await stateService.getById(id)
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
router.post('/state', async(ctx)=>{
    const values= ctx.request.body
    const result = await stateService.createState(values)
    //const data=await knex('township').where('Township_ID',result).first()
    ctx.body = result
})
router.put('/state/:id',async(ctx)=>{
    const id = ctx.params.id
    const values=ctx.request.body
    const data=await stateService.updateState(id,values)
    ctx.body=data
})
router.delete('/state/:id',async(ctx)=>{
    const id= ctx.params.id
    const data= await stateService.deleteById(id)
    console.log(data, 'data')
    if(data){
        ctx.body="Delete"
    }else{
        ctx.body="No Row found"
    }
})
module.exports=router