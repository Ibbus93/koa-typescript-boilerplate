import { Context } from 'koa'
import HttpStatus from 'http-status'
import { itemList } from '~/mocks/items.mock'

const ItemsController = {
  get: (ctx: Context) => {
    ctx.body = itemList
    ctx.status = HttpStatus.OK
  },
  getItem: (ctx: Context) => {
    ctx.body = itemList[0]
    ctx.status = HttpStatus.OK
  },
  create: (ctx: Context) => {
    ctx.body = ctx.request.body
    ctx.status = HttpStatus.CREATED
  },
  update: (ctx: Context) => {
    ctx.body = ctx.request.body
    ctx.status = HttpStatus.OK
  },
  delete: (ctx: Context) => {
    ctx.status = HttpStatus.NO_CONTENT
  }
}

export default ItemsController
