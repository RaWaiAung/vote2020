const KOA = require(`koa`)
const Router = require(`koa-router`)
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const bcrypt = require('bcrypt')

const villageRouter = require('./router/village-router')
const townRouter = require('./router/town-router')
const canadidateRouter = require('./router/candidate-router')
const voterRouter = require('./router/voter-router')
const villageTracksRouter = require('./router/village-tracks-router')
const officeRouter = require('./router/office-router')
const wardsRouter = require('./router/wards-router')
const partyRouter = require('./router/party-router')
const constituencyRouter = require('./router/constituency-router')
const stateRouter = require('./router/state-router')
const districtRouter = require('./router/district-router')
const townshipRouter = require('./router/township-router')
const userRouter = require('./router/user-router')
const nrcRouter = require('./router/nrc-router')
 const count = require('./router/counting-router')
const app = new KOA()
const router = new Router()

app.use(bodyParser());
app.use(cors());
app.use(villageRouter.routes()).use(router.allowedMethods())
app.use(townRouter.routes()).use(router.allowedMethods())
app.use(canadidateRouter.routes()).use(router.allowedMethods())
app.use(voterRouter.routes()).use(router.allowedMethods())
app.use(villageTracksRouter.routes()).use(router.allowedMethods())
app.use(officeRouter.routes()).use(router.allowedMethods())
app.use(wardsRouter.routes()).use(router.allowedMethods())
app.use(partyRouter.routes()).use(router.allowedMethods())
app.use(constituencyRouter.routes()).use(router.allowedMethods())
app.use(stateRouter.routes()).use(router.allowedMethods())
app.use(districtRouter.routes()).use(router.allowedMethods())
app.use(townshipRouter.routes()).use(router.allowedMethods())
app.use(userRouter.routes()).use(router.allowedMethods())
app.use(nrcRouter.routes()).use(router.allowedMethods())
app.use( count.routes()).use(router.allowedMethods())


app.listen((4000),() => {
    console.log("Sever is running at 4000")
})


