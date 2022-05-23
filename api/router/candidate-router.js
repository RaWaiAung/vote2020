const Router = require(`koa-router`);
const candidateService = require('../service/candidate')
const helper = require('../util/helper')
const config = require('../knexfile')
const knex = require(`knex`)(config)

const router = new Router();

router.get("/candidate",async(ctx) => {
    const {query} = ctx.request.query
const search = helper.transformQueryParams(query)
console.log(query,"Search")

    const data = await candidateService.getAll(search)
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

router.get("/candidate/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await candidateService.getById(id)
    ctx.body = data
});

router.post("/candidate",async(ctx) => {
    const values = ctx.request.body
    const result = await candidateService.createCandidate(values)
    ctx.body = result

});

router.put("/candidate/:id",async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const result = await candidateService.updateCandidate(id,values)
    ctx.body = result
});

router.delete("/candidate/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await candidateService.deleteCandidate(id)
    if(data){
        ctx.body = "Delete"
    }else{
        ctx.body = "No Row found"
    }
   });

module.exports = router