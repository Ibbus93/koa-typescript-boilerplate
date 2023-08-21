import Router from 'koa-router'
import createItemRoutes from './item.routes'

const initRoutes = (router: Router) => {
  createItemRoutes(router)
}

export default initRoutes
