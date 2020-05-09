const config = require('./db_config.js')
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.connect( err => {
    if(err){
        console.log(err)
    } else {
        console.log("connect success !! 连接数据库成功 ！！")
    }
})

module.exports = {
    connection
}