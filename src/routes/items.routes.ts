import Router from 'koa-router'
import ItemsController from '../controllers/items.controller'

const PATH = '/item'

const createItemsRoutes = (router: Router) => {
  router.get(PATH, ItemsController.get)
  router.get(PATH, ItemsController.get)
  router.get(PATH, ItemsController.get)
  router.get(PATH, ItemsController.get)
}

export default createItemsRoutes
