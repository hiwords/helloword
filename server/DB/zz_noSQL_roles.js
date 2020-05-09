const mongoose = require('mongoose')

const ROLE_SCHEMA = {
    name: String,
    birthday: String,
    live: Boolean,
    level: String
}


let roleGroup = new mongoose.Schema(ROLE_SCHEMA)

let roleModel= mongoose.model('Roles', roleGroup)

// let newRole = new roleModel({
//     name: "宋一琳",
//     birthday: "春元252年",
//     live: true,
//     level: '才人'
// })

// newRole.save()

module.exports = {
    roleModel
}