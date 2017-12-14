// 引入数据库
const model = require('../model');

// 定义模型 引入model下的list表
let Users = model.Users;
var users = async (ctx, next) => {

    // 读取数据
    var users = await Users.findAll();
    let data = [];
    for (let p of users) {
        data.push(p)
    }
    // console.log(data)
    // ctx.response.body=data;
    ctx.render('users.html', {
        data: data
    });
};

module.exports = {
    'GET /users': users
};