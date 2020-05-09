const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const path = require("path")

// const mongodb = require('./DB/index')
// mongodb.operateDB()

// const DB = require('./DB/index')
// DB.connection.connect( err => {
//   if(err){
//       console.log(err)
//   } else {
//       console.log("connect success !! 连接数据库成功 ！！")
//   }
// })

const Router = require('koa-router')
const index = require('./routes/index')
const users = require('./routes/users')
const role = require('./routes/role')
const level = require('./routes/level')

// error handler
onerror(app)

// middlewares
app.use(koaBody({
  multipart:true, // 支持文件上传
  formidable:{
    uploadDir:path.join(__dirname,'public/upload/'), // 设置文件上传目录
    keepExtensions: true,    // 保持文件的后缀
    maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
    onFileBegin:(name,file) => { // 文件上传前的设置
      // console.log(`name: ${name}`);
      // console.log(file);
    },
  }
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

const router = new Router()
app.use(router.allowedMethods())
// routes

app.use(index.routes())
app.use(users.routes())
app.use(role.routes())
app.use(level.routes())


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
