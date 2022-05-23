const Router = require(`koa-router`);
const townService = require('../service/town')
const helper = require('../util/helper')


const config = require('../knexfile')
const knex = require(`knex`)(config)

const router = new Router();

router.get('/town', async(ctx) =>{
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)
    console.log(query,"Search")
    
        const data = await townService.getAll(search)
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
    
router.get('/town/:id',async(ctx) => {
    const id = ctx.params.id
    const data = await townService.getById(id)
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
});

router.post("/town",async(ctx) => {
    const values = ctx.request.body
    const result = await townService.createTown(values)
    ctx.body = result

});

router.put("/town/:id",async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const result = await townService.updateTown(id,values)
    ctx.body = result
});

router.delete("/town/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await townService.deleteTown(id)
    if(data){
        ctx.body = "Delete"
    }else{
        ctx.body = "No Row found"
    }
   });

module.exports = router