import Koa from 'koa'
import json from 'koa-json'
import Router from 'koa-router'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'

import initRoutes from '~/routes'

const app = new Koa()
const router = new Router()

const PORT = process.env.PORT || 3300

app.use(logger())
app.use(json())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

initRoutes(router)

app.listen(PORT, () => {
  console.log('🚀 ~ Koa started and listening to', PORT)
})
