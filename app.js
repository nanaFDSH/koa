const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

// 模板引擎
const templating = require('./templating');

// 路由控制
const controller = require('./controller');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

// 判断当前环境
const isProduction = process.env.NODE_ENV === 'production';

// 引入模板引擎
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');