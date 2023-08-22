import Router from 'koa-router'
import createItemsRoutes from '~/routes/items.routes'

const initRoutes = (router: Router) => {
  createItemsRoutes(router)
}

export default initRoutes
