# Routes

In this folder you can list the various routes you will have in your service.  
The `index.ts` function `initRoutes` will take care of building the routing, so you just have to:

- create a routes file (see as reference `items.routes.ts`): this file should export a function that takes a `Router` as parameter;
- import the brand new routing file and use its function inside `initRoutes` in order to add new routes to your service.
