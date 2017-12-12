var hello = async (ctx, next) => {
    ctx.render('hello.html', {
        title: 'hello'
    });
};

module.exports = {
    'GET /hello': hello
};