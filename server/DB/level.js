const config = require('./db_config.js')
const mysql = require('mysql')
const pool = mysql.createPool(config)
module.exports = {
    create: (name) => {
        return new Promise( (res, rej) => {
            /** pool.getConnection((err, connection) => {
                // 直接用 pool.query 每次都随机分配 connection。当有些操作需要保证是同一 connection 的时候，就独立使用 pool.getConnection吧
                if(err) rej(err);
                else {
                    connection.query
                }
            }) */
            let insertLevelName = `insert into level (level_name) values(?)`
            pool.query(insertLevelName, name, (err, result) => {
                if(err) {
                    console.log(err)
                    rej()
                } else {
                    res({level_name: name,level_id:result.insertId})
                }
            })
        })
    }
}