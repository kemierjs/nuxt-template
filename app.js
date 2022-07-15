let Koa = require('koa');
let app = new Koa();
let router = require('./router');

const start = require("./middleware/nuxt-render");

app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(start());

module.exports = {app}
