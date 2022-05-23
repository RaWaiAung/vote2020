const Router = require(`koa-router`);
const officeService = require('../service/office')
const helper = require('../util/helper')
const config = require('../knexfile')
const knex = require(`knex`)(config)

const router = new Router();

router.get("/office",async(ctx) => {
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)
    console.log(query,"Search")
        const data = await officeService.getAll(search)
        ctx.body = data
});

router.get("/office/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await officeService.getById(id)
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
});

router.post("/office",async(ctx) => {
    const values = ctx.request.body
    const result = await officeService.createOffice(values)
    ctx.body = result

});

router.put("/office/:id",async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const result = await officeService.updateOffice(id,values)
    ctx.body = result
});

router.delete("/office/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await officeService.deleteOffice(id)
    if(data){
        ctx.body = "Delete"
    }else{
        ctx.body = "No Row found"
    }
   });

module.exports = router