import Router from 'koa-router'
import createItemsRoutes from './items.routes'

const initRoutes = (router: Router) => {
  createItemsRoutes(router)
}

export default initRoutes
