import Router from 'koa-router'
import ItemsController from '~/controllers/items.controller'
import { ITEMS_PATH } from '~/constants/routes.constants'

const createItemsRoutes = (router: Router) => {
  router.get(ITEMS_PATH, ItemsController.get)
  router.get(ITEMS_PATH, ItemsController.get)
  router.get(ITEMS_PATH, ItemsController.get)
  router.get(ITEMS_PATH, ItemsController.get)
}

export default createItemsRoutes
