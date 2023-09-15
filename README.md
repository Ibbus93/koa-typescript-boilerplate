# KOA Typescript Boilerplate

## Description and Motivations

This project is intended to be a personal boilerplate, but also built for the community. It will help in further personal projects, having a good fork-able project.
As you will see, there is an example CRUD controller, but no ORM DB library is installed. This is because the project is intended to be the most flexible, allowing the dev to use the
service as it may like the most.

## Technologies

The boilerplate contains the following technologies:

- Typescript
- Koa
- Jest
- Joi
- Prettier
- Eslint

## Project structure

The structure allows the developer to split the code following the single-responsibility principle, so it contains folders for:

- `constants`: the constants that can be created inside the project
- `controllers`: folder for the various service controllers;
- `errors`: list of errors of the application;
- `mocks`: mocks that will be useful mainly for testing;
- `routes`: list of routes files;
- `tests`: this is the test folder and all the test files placed here will be run by Jest;
- `types`: folder for the types declaration in the project;
- `validators`: this folder contains validators written in Joi and fungible as middleware.

## How to start

If you use [nvm](https://github.com/nvm-sh/nvm), in order to use the right node version run:

```bash
nvm use
```

After this, install the dependencies with:

```bash
npm i
```

### Run the server

To run the server, just execute:

```bash
npm start
```

### Development server

To run the server in listening mode, run:

```bash
npm run dev
```

### Test the application

To run the test suite, just run:

```bash
npm test
```

### Build the application

To build the service, run:

```bash
npm build
```

A `/build` folder will be produced as output.
