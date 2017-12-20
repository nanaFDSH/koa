const model = require('../model');

let List = model.List;

var list = async (ctx, next) => {
    // 查询
    var list = await List.findAll();

    let data=[];
    for (let p of list) {
        data.push(p)
    }
    // console.log(data)
    ctx.response.body = data;
    // ctx.render('list.html', {
    //     data: data
    // });
};

module.exports = {
    'GET /list': list
};