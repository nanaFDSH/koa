var signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    if (name === 'koa' && password === '12345') {
        console.log('signin ok!');
        ctx.render('sign-ok.html', {
            title: 'Sign In OK',
            name: name
        });
    } else {
        console.log('signin failed!');
        ctx.render('sign-failed.html', {
            title: 'Sign In Failed'
        });
    }
};

module.exports = {
    'POST /signin': signin
};