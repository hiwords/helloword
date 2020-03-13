const router = require('koa-router')()

router.prefix('/')

router.get('/', function (ctx, next) {
    let body = ctx.request.body
    console.log(body)
    ctx.body = 'this is a api response!'
})

router.get('/role', function (ctx, next) {
    let body = ctx.request.body
    console.log(body)
    ctx.body = 'this is a api/role response'
})

router.get('/role/list', function (ctx, next) {
    ctx.body = {
        status: 200,
        info: "get",
        data: [{name: '新'},{name: '中'},{name: '国'},{name: '万'},{name: '岁'},]
    }
})
router.post('/role/list', function (ctx, next) {
    ctx.body = {
        status: 200,
        info: "post",
        data: [{name: '新'},{name: '中'},{name: '国'},{name: '万'},{name: '岁'},]
    }
})

module.exports = router
