var index = async (ctx, next) => {
    ctx.render('hello.html', { name: 'Michael' });
};

module.exports = {
    'GET /admin': index
};