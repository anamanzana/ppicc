const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello, World!';
});

app.listen(3000, () => {

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  console.log('Server running on port 3000');
});