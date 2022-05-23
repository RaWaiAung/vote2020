const Router = require(`koa-router`);
const townShipService = require('../service/township')
const helper = require('../util/helper')
const config = require('../knexfile')
const knex = require(`knex`)(config)

const router = new Router();

router.get('/township', async(ctx) =>{
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)
    console.log(query,"Search")
    
        const data = await townShipService.getAll(search)
        ctx.body = data
        // try{
        //     ctx.body = {
        //         status:200,
        //         data:data
        //     }
        // }catch(error){
        //     ctx.body={
        //         status:400,
        //         data:error-message
        //     }
        // }
    })

router.get("/township/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await townShipService.getById(id)
    ctx.body = data
});

router.post("/township",async(ctx) => {
    const values = ctx.request.body
    const result = await townShipService.createTownship(values)
    ctx.body = result

});

router.put("/township/:id",async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const result = await townShipService.updateTownship(id,values)
    ctx.body = result
});

router.delete("/township/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await townShipService.deleteTownship(id)
    if(data){
        ctx.body = "Delete"
    }else{
        ctx.body = "No Row found"
    }
   });

module.exports = router