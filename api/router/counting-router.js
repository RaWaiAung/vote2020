const Router = require(`koa-router`);
const countingService = require('../service/counting')
const helper = require('../util/helper')
const config = require('../knexfile')
const knex = require(`knex`)(config)

const router = new Router();

router.get("/counting",async(ctx) => {
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)
    console.log(search,"search")
    const data = await countingService.getAll(search)
    ctx.body = data
});

router.get("/counting/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await countingService.getById(id)
    ctx.body = data
});

module.exports = router