const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

// µ¼Èëcontroller middleware:
const controller = require('./controller');

const templating = require('./templating');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(bodyParser());

const isProduction = process.env.NODE_ENV === 'production';

app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add router middleware:
app.use(controller());

/*if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}*/

app.listen(3000);
console.log('app started at port 3000...');