import { Context } from 'koa'

const ItemsController = {
  get: (ctx: Context) => {
    ctx.body = { path: 'item' }
  },
  create: (ctx: Context) => {
    ctx.body = ctx.request.body
  }
}

export default ItemsController
