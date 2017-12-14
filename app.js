const Koa = require('koa');

// post get请求 json读取
const bodyParser = require('koa-bodyparser');

// 路由控制
const controller = require('./controller');

// 模板引擎
const templating = require('./templating');

const app = new Koa();

// 常量isProduction，它判断当前环境是否是production环境。如果是，就使用缓存，如果不是，就关闭缓存。
// 在开发环境下，关闭缓存后，我们修改View，可以直接刷新浏览器看到效果，否则，每次修改都必须重启Node程序，会极大地降低开发效率
// 在开发的时候，环境变量应该设置为'development'，而部署到服务器时，环境变量应该设置为'production'
const isProduction = process.env.NODE_ENV === 'production';

// log request URL:
app.use(async (ctx, next) => {
    // console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// isProduction为undefined
if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// parse request body:
app.use(bodyParser());

// 引入模板引擎 templating
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// 路由控制 add controllers:
app.use(controller());

app.listen(4000);
console.log('app started at port 4000...');