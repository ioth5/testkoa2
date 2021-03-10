// db/index.js
const mongoose = require('./db')
/*
声明 Schema
创建数据表模型，即 User，就是数据表的名字
下面给 User 表声明三个字段 username password age
*/
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
})

// 根据 schema 生成 model
const model = {
  User: mongoose.model('User', userSchema)
}

module.exports = model

