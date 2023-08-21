import Koa from "koa";
import json from "koa-json"
import Router from "koa-router"
import logger from "koa-logger"

const app = new Koa();
const router = new Router()

const PORT = 3300

app.use(logger())
app.use(json())
app.use(router.routes())

// response
router.get("/", (ctx) => {
  ctx.body = { msg: "Hola Koa!" }
})

app.listen(PORT, () => {
  console.log("🚀 ~ Koa started and listening to", PORT)
});