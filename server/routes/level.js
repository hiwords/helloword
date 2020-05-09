const router = require('koa-router')()
const {create} = require('../DB/level')
router.prefix('/level')
let dbErrorResponse = {
    status: -1,
    info: "db save error",
    data: {}
}

router.post('/list',async function (ctx, next) {
    let responseBody;
    await create
        ctx.body = responseBody
})

router.post('/create',async function (ctx, next) {
    let body = ctx.request.body;
    let responseBody = {
        status: 200,
        info: "success",
        data: []
    };
    if(body.name){
        let {name} = body
        await create(name).then(res => {
            responseBody.data = res
        })
    } else {
        responseBody = {
            status: 10001,
            info: "等级名称是必填的",
            data: {}
        }
    }
    ctx.body = responseBody
})


module.exports = router
