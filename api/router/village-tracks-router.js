const Router = require(`koa-router`);
const villageTractsService = require('../service/village-tracks')
const helper = require('../util/helper')

const config = require('../knexfile')
const knex = require(`knex`)(config)

const router = new Router();

router.get('/villagetracts', async(ctx) =>{
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)
    console.log(query,"Search")
    
        const data = await villageTractsService.getAll(search)
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

    router.get('/villagetracts', async(ctx) =>{
        const {query} = ctx.request.query
        const search = helper.transformQueryParams(query)
        console.log(query,"Search")
        
            const data = await villageTractsService.getAll(search)
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

router.get("/villagetracts/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await villageTractsService.getById(id)
    ctx.body = data
});

router.post("/villagetracts",async(ctx) => {
    const values = ctx.request.body
    const result = await villageTractsService.createVillageTracts(values)
    ctx.body = result

});

router.put("/villagetracts/:id",async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const result = await villageTractsService.updateVillageTracts(id,values)
    ctx.body = result
});

router.delete("/villagetracts/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await villageTractsService.deleteVillageTracts(id)
    if(data){
        ctx.body = "Delete"
    }else{
        ctx.body = "No Row found"
    }
   });

module.exports = router