# FoxStorm Typescript WEB Framework

<p align="center">
  <img src="https://i.imgur.com/2EmQNvF.png" alt="FoxStorm Typescript WEB Framework" width="190" />
</p>

FoxStorm is a TypeScript Framework that provides a foundation for building your API / Website.

## Getting Started

* Installation
* Routing
* Controllers
* Presenters
* Decorators
* Models
* Services
* Mail
* Logger

## Installation

### Server Requirements

* Node >= 8

### Installing FoxStorm

1. Install FoxStorm CLI:

    ```bash
      npm install -g git+https://git@github.com/foxstorm/cli.git
    ```

2. Once installed `foxstorm-cli` command will become available in your shell. For example, `foxstorm-cli new hello-world` will create a directory named `hello-world` and will contain a fresh `FoxStorm` installation with all of `FoxStorm` dependencies and configuration files.

    ```bash
      foxstorm-cli new hello-world
    ```

3. Go to the `hello-world` directory and start the server

    ```bash
      cd hello-world
      npm run-s startServer
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
  import { Router } from 'foxstorm'

  export const routes = (router: Router): void => {
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
import { Router, __invoke } from 'foxstorm'
import { ShowProfile } from './controllers/ShowProfile'

export const routes = (router: Router): void => {
  Route.get('/show-profile', __invoke(ShowProfile))
]
```

## Presenters

If your models contains methods that are used only in views or part as the JSON values in an API response, it might be
a good time to refactor them. `Presenters` is a design pattern that usually refers to Model View Presenter (MVP).
It retrieves data from repositories (the model), and formats it for display in the view / JSON response.
In FoxStorm the Presenters are located in the `presenters` folder.

### How does presenter works in FoxStorm?

By creating a new class in the `presenters` folder, and passing an object in the
constructor, the presenter will inherit all the properties and the methods that the initial object have. For the magic
to be happening, the presenter class needs to extend from the `BasePresenter` class, and call `super(object)` in your
constructor. Under the hood, the `BasePresenter` class is copying the properties and the methods that `object` has.
Because TypeScript is a typed language that compiles to Javascript, in your presenter you will need to declare the
properties that you want to access from the initial object, otherwise you will get compiling error, because your
presenter does not know what properties your `object` has.

Example of presenters:

** _UserPresenter.ts_

```typescript
import { BasePresenter } from 'foxstorm'

export class UserPresenter extends BasePresenter {
  public firstName!: string
  public lastName!: string

  constructor (user: User) {
    super(user)
  }

  fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}
```

Using the presenter in the controller:

** _UsersController.ts_

```typescript
import { UserPresenter } from '../../presenters/UserPresenter'

export class UsersController {
  show(req: Request, res: Response) {
    const user = User.find(req.params.id)
    const presentedUser = new UserPresenter(user)

    console.log(presentedUser.fullName())

    return res.send(presentedUser)
  }
}
```

## Decorators

The `Decorators` pattern works in exactly the same way as the `Presenters`, but instead keeping view / presenting logic
they keep business logic.

** _UserWorkDecorator.ts_

```typescript
import { BaseDecorator } from 'foxstorm'

export class UserWorkDecorator extends BaseDecorator {
  constructor (user: User) {
    super(user)
  }

  startWork () {
    // logic code
  }

  finishWork () {
    // logic code
  }
}
```

Using the decorator in the controller:

** _UsersController.ts_

```typescript
import { UserWorkDecorator } from '../../decorators/UserWorkDecorator'
import { UserPresenter } from '../../presenters/UserPresenter'

export class UsersController {
  startWork(req: Request, res: Response) {
    const user = User.find(req.params.id)
    const presentedUser = new UserPresenter(user)
    const userWorkDecorator = new UserWorkDecorator(user)

    userWorkDecorator.startWork()

    return res.send({ success: `${presentedUser.fullName()} started working!`})
  }
}
```

## Services

--

## Mail

Using views:

```typescript
  class OrderShipped implements Mailable extends Mailer {
    constructor (readonly user: User) {
      super()
    }

    buildMessage () {
      this.render('emails/orderShipped', { user: this.user })
    }
  }
```

## Logger