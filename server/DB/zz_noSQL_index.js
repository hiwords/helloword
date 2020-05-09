const mongoose = require('mongoose')

const ROLE_SCHEMA = {
    name: String,
    birthday: String,
    live: Boolean,
    level: String
}

function operateDB() {
    mongoose.connect(
        "mongodb://127.0.0.1:27017/node_management", 
        {useNewUrlParser: true, useUnifiedTopology: true}, 
        (err, res) => {
        if(!err){
            // console.log("DB createConnection ::", res)
        }
    })

    // 连接成功
    mongoose.connection.on('connected', function() {
        console.log('Mongoose connection open to : ', 'node_management');
    })

    // 连接异常
    mongoose.connection.on('error', function (err) {
        console.log('Mongoose connection error: ' + err);
    })

    // 断开连接
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose connection disconnected');
    })
}

module.exports = {
    mongoose,
    operateDB
}