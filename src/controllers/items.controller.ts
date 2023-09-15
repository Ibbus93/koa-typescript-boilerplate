import { Context } from 'koa'
import HTTP_STATUS from 'http-status'
import { itemList } from '~/mocks/items.mock'

const ItemsController = {
  get: (ctx: Context) => {
    ctx.body = itemList
    ctx.status = HTTP_STATUS.OK
  },
  getItem: (ctx: Context) => {
    ctx.body = itemList[0]
    ctx.status = HTTP_STATUS.OK
  },
  create: (ctx: Context) => {
    ctx.body = ctx.request.body
    ctx.status = HTTP_STATUS.CREATED
  },
  update: (ctx: Context) => {
    ctx.body = ctx.request.body
    ctx.status = HTTP_STATUS.OK
  },
  delete: (ctx: Context) => {
    ctx.status = HTTP_STATUS.NO_CONTENT
  }
}

export default ItemsController
