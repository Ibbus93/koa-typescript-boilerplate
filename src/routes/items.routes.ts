import Router from 'koa-router'
import ItemsController from '~/controllers/items.controller'
import { ITEMS_PATH } from '~/constants/routes.constants'
import { validateItem } from '~/validators/items.validators'

const createItemsRoutes = (router: Router) => {
  router.get(ITEMS_PATH, ItemsController.get)
  router.post(ITEMS_PATH, validateItem, ItemsController.create)
}

export default createItemsRoutes
