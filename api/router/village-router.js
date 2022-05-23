const Router = require(`koa-router`);
const villageService = require('../service/village')
const helper = require('../util/helper')

const config = require('../knexfile')
const knex = require(`knex`)(config)

const router = new Router();

router.get('/village', async(ctx) =>{
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)
    console.log(query,"Search")
    
        const data = await villageService.getAll(search)
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


router.get("/village/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await villageService.getById(id)
    ctx.body = data
});

router.post("/village",async(ctx) => {
    const values = ctx.request.body
    const result = await villageService.createVillage(values)
    ctx.body = result

});

router.put("/village/:id",async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const result = await villageService.updateVillage(id,values)
    ctx.body = result
});

router.delete("/village/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await villageService.deleteVillage(id)
    if(data){
        ctx.body = "Delete"
    }else{
        ctx.body = "No Row found"
    }
   });

module.exports = router