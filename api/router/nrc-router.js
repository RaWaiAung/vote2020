const Router = require(`koa-router`);
const wardsService = require('../service/nrc')

const config = require('../knexfile')
const knex = require(`knex`)(config)

const router = new Router();

router.get("/nrc",async(ctx) => {
    const data = await wardsService.getAll()
    ctx.body = data
});

router.get("/nrc/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await wardsService.getById(id)
    ctx.body = data
});

// router.post("/wards",async(ctx) => {
//     const values = ctx.request.body
//     const result = await wardsService.createWards(values)
//     ctx.body = result

// });

// router.put("/wards/:id",async(ctx) => {
//     const id = ctx.params.id
//     const values = ctx.request.body
//     const result = await wardsService.updateWards(id,values)
//     ctx.body = result
// });

// router.delete("/wards/:id",async(ctx) => {
//     const id = ctx.params.id
//     const data = await wardsService.deleteWards(id)
//     if(data){
//         ctx.body = "Delete"
//     }else{
//         ctx.body = "No Row found"
//     }
//    });

module.exports = router