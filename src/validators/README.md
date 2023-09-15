# Validators

In this folder you can put all the validators you want to support in your service. In this folder you have:

- `index.ts`: inside of this file, you have a `createJoiMiddleware` function that allows you to use the validator as a middleware (see as instance `items.routes.ts` file);
- `items.validators.ts`: it contains some validators and it exports some middleware ready to use in the routing.
