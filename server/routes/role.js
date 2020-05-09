const router = require('koa-router')()
const {roleModel} = require('../DB/level')
router.prefix('/role')

let dbErrorResponse = {
    status: -1,
    info: "db save error",
    data: {}
}

router.post('/list',async function (ctx, next) {
    let responseBody;
    await roleModel.find((err, roleList) => {
            if(err){
                console.log("db error::", err)
                responseBody = dbErrorResponse
            } else {
                responseBody = {
                    status: 200,
                    info: "success",
                    data: roleList.map( role => {
                        let {name, birthday, live, level} = role
                        return {name, birthday, live, level}
                    })
                }
            }
            console.log(responseBody)
        })
        ctx.body = responseBody
})

router.post('/creat',async function (ctx, next) {
    let body = ctx.request.body;
    let responseBody;
    if(body.name){
        let {name, birthday, live, level} = body 
        let newRole = new roleModel({
            name,
            birthday,
            live,
            level
        })
        
        await newRole.save((err, result) => {
            if(err){
                console.log("db error::", err)
                responseBody = dbErrorResponse
            } else {
                resBody = {
                    status: 200,
                    info: "success",
                    data: result
                }
            }
        })
    } else {
        responseBody = {
            status: 10001,
            info: "角色名是必填的",
            data: {}
        }
    }
    ctx.body = responseBody
})


module.exports = router
