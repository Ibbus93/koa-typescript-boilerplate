import { Context } from 'koa'

const ItemsController = {
  get: (ctx: Context) => {
    ctx.body = { path: 'item' }
  }
}

export default ItemsController
