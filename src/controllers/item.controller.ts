import { Context } from "koa"

const ItemController = {
  get: (ctx: Context) => {
    ctx.body = { path: 'item' }
  }
}

export default ItemController