const Router = require(`koa-router`);
const userService = require('../service/user')
const bcrypt = require('bcrypt')
const config = require('../knexfile')
const knex = require(`knex`)(config)

const router = new Router();

router.get("/user",async(ctx) => {
    const data = await userService.getAll()
    ctx.body = data
});


router.post("/login",async(ctx) => {
    let {username,password} = ctx.request.body
    const user = await userService.getUserById(username)
    if(user){
        let checkPassword =bcrypt.compareSync(password, user.password);
        if(checkPassword){
            ctx.body = {
                status :200,
                message : "login success",
                data : {
                    username :user.username,
                    email : user.email,
                    role : user.role
                }

            }
        }else{
            ctx.body ={
                status :400,
                message : "Invalid password"
            }
        }
    }    else{
        ctx.body = {
            status : 400,
            message : "Invalid user name and password"
        }
    }
 
});

router.get("/user/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await userService.getById(id)
    ctx.body = data
});

router.post("/user",async(ctx) => {
    const values = ctx.request.body
   values.password = bcrypt.hashSync(values.password,10)
    const result = await userService.createUser(values)
    ctx.body = result

});

router.put("/user/:id",async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const result = await userService.updateUser(id,values)
    ctx.body = result
});

router.delete("/user/:id",async(ctx) => {
    const id = ctx.params.id
    const data = await userService.deleteUser(id)
    if(data){
        ctx.body = "Delete"
    }else{
        ctx.body = "No Row found"
    }
   });

module.exports = router