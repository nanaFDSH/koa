var login = async (ctx, next) => {
    ctx.render('login.html', {
        title: 'login'
    });
};

var signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    if (name === 'koa' && password === '12345') {
        console.log('signin ok!');
        ctx.render('index.html', {
            name: name
        });
    } else {
        console.log('signin failed!');
        ctx.render('login.html', {
            msg: '请重新输入'
        });
    }
};

module.exports = {
    'GET /login': login,
    'POST /login': signin
};