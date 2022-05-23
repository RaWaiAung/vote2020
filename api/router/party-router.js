const Router = require(`koa-router`);
const partyService = require('../service/party')

const config = require('../knexfile')
const knex = require(`knex`)(config)

const router = new Router();

router.get("/party",async(ctx) => {
    const data = await partyService.getAll()
    ctx.body = data
});

router.get("/party/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await partyService.getById(id)
    ctx.body = data
});

router.post("/party",async(ctx) => {
    const values = ctx.request.body
    const result = await partyService.createParty(values)
    ctx.body = result

});

router.put("/party/:id",async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const result = await partyService.updateParty(id,values)
    ctx.body = result
});

router.delete("/party/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await partyService.deleteParty(id)
    if(data){
        ctx.body="Delete"
    }else{
        ctx.body="No Row found"
    }
   });

module.exports = router