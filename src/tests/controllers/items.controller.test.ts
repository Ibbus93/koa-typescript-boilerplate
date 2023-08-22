import { Context } from 'koa'
import { createMockContext } from '@shopify/jest-koa-mocks'

import ItemsController from '~/controllers/items.controller'

describe('Items controller', () => {
  test('GET - it returns correct values in body', async () => {
    const ctx: Context = createMockContext()
    ItemsController.get(ctx)
    expect(ctx.body).toStrictEqual({ path: 'item' })
  })
})
