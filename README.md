# FoxStorm

TypeScript WEB API Framework

## Getting Started

* Installation (WIP)
* Routing
* Controllers
* Presenters
* Decorators
* Services
* Logger

## Installation

### Server Requirements

* Node >= 8

### Installing FoxStorm (WIP)

```bash
  npm install -g foxstorm
```

Once installed `foxstorm` command will become available in your shell. For example, `foxstorm new hello-world` will create a directory named `hello-world` and will contain a fresh `FoxStorm` installation with all of `FoxStorm` dependencies and configuration files.

```bash
  foxstorm new hello-world
```

## Routing

All FoxStorm routes are defined in a route file which lives in `http/routes.ts`. This file is loaded automatically by the framework.

### Defining a route

To define a route, first you need to import the controller:

```typescript
  import { UsersController } from './controllers/UsersController'
```

then initialize the controller:

```typescript
  const usersController = new UsersController()
```

and for that route to be registered, it needs to be added in the routes `ROUTES: Route[]` array that is provided in the routes file

```typescript
  export const ROUTES: Route[] = [
    Route.get('/users', usersController.index),
    Route.post('/users/', usersController.create)
  ]
```

### Available Router Methods

```typescript
  Route.get(uri, callback)
  Route.post(uri, callback)
  Route.put(uri, callback)
  Route.delete(uri, callback)
```

### Route Parameters

To capture segments of the URI you can specify named parameters:

```typescript
  Route.get('users/:id', callback)
```

You can also pass in a RegExp object and access the capture group with req.params (which will not be interpreted in any way):

```typescript
  Route.get(/^\/([a-zA-Z0-9_\.~-]+)\/(.*)/, callback)
```

### Root Route

You can specify what FoxStorm should route '/' to with the root method:

```typescript
  Route.root(callback)
```

## Controllers

* Introduction
* Basic Controllers
* * Define a Basic Controller
* * Single Action Controller
* Resource Controllers
* Controller Middleware

### Introduction

Instead putting all you request handling logic in the routes file, you can organise all your code in controllers. Controllers are located in the `http/controllers`

### Basic Controllers

#### Define a Basic Controller

A controller can be created manually by creating a class in the `http/controllers` folder:

```typescript
  import { BaseController, Request, Response } from 'foxstorm'

  export class UsersController extends BaseController {
    index (req: Request, res: Response): void {
      res.send('Registries Index')
    }
  }
```

Or can be generated quickly using this FoxStorm command:

```bash
  foxstorm generate controller Users
```

#### Single Action Controller

Sometimes you may need controllers that does a single action. Initially you may think, why not putting the code in the routes file?
But again, doing this for a couple of routes, you will end up again, polluting the routes file.
There is a very easy solution for this, Controllers with Single Actions:

```typescript
  import { BaseController, Request, Response } from 'foxstorm'

  export class RegisterUserController extends BaseController {
    __invoke (req: Request, res: Response): void {
      res.send('User Registered Successfully!')
    }
  }
```

Or can be generated quickly using this FoxStorm command:

```bash
  foxstorm generate controller Users --singleAction
```

For this case in the routes you don't need to specify an action:

```typescript
import { Route, __invoke } from 'foxstorm'
import { ShowProfile } from './controllers/ShowProfile'

export const ROUTES: Route[] = [
  Route.get('/show-profile', __invoke(ShowProfile))
]
```

## Presenters

## Decorators

## Services

## Logger