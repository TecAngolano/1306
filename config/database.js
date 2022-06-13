const mongoose = require('mongoose')

const conn = async()=>{
    var atlas = await mongoose.connect('mongodb+srv://admiro:cone@fiaptecnico.kreph.mongodb.net/todo_list')
}
module.exports = conn
