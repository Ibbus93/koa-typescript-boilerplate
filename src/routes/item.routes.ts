import Router from "koa-router";
import ItemController from "../controllers/item.controller";

const PATH = "/item";

const createItemRoutes = (router: Router) => {
  router.get(PATH, ItemController.get);
  router.get(PATH, ItemController.get);
  router.get(PATH, ItemController.get);
  router.get(PATH, ItemController.get);
};

export default createItemRoutes;
