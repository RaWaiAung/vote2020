const Router = require(`koa-router`);
const voterService = require('../service/voter')

const config = require('../knexfile')
const knex = require(`knex`)(config)

const router = new Router();

router.get("/voter",async(ctx) => {
    const data = await voterService.getAll()
    ctx.body = data
});

router.get("/voter/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await voterService.getById(id)
    ctx.body = data
});

router.post("/voter",async(ctx) => {
    const values = ctx.request.body
    const result = await voterService.createVoter(values)
    ctx.body = result

});

router.put("/voter/:id",async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const result = await voterService.updateVoter(id,values)
    ctx.body = result
});

router.delete("/voter/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await voterService.deleteVoter(id)
    if(data){
        ctx.body = "Delete"
    }else{
        ctx.body = "No Row found"
    }
   });

module.exports = router