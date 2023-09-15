import { Context } from 'koa'
import { createMockContext } from '@shopify/jest-koa-mocks'

import ItemsController from '~/controllers/items.controller'
import { itemList } from '~/mocks/items.mock'

describe('Items controller', () => {
  test('GET - it returns correct values in body', async () => {
    const ctx: Context = createMockContext()
    ItemsController.get(ctx)
    expect(ctx.body).toStrictEqual(itemList)
  })

  test('GET ITEM - it returns correct item in body', async () => {
    const ctx: Context = createMockContext()
    ItemsController.getItem(ctx)
    expect(ctx.body).toStrictEqual(itemList[0])
  })
})
