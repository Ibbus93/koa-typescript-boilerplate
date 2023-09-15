import Router from 'koa-router'
import ItemsController from '~/controllers/items.controller'
import { ITEMS_PATH } from '~/constants/routes.constants'
import { validateItem, validateUpdateItem } from '~/validators/items.validators'

const createItemsRoutes = (router: Router) => {
  router.get(ITEMS_PATH, ItemsController.get)
  router.get(`${ITEMS_PATH}/:id`, ItemsController.getItem)
  router.post(ITEMS_PATH, validateItem, ItemsController.create)
  router.put(`${ITEMS_PATH}/:id`, validateUpdateItem, ItemsController.update)
  router.delete(`${ITEMS_PATH}/:id`, ItemsController.delete)
}

export default createItemsRoutes
