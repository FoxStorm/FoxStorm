# FoxStorm

TypeScript WEB API Framework

## Getting Started

* Routing
* Controllers
* Presenters
* Decorators
* Services
* Logger

## Routing

All FoxStorm routes are defined in a route file which lives in `http/routes.ts`. This file is loaded automatically by the framework.

### Defining a route

To define a route, first you need to initialize the controller

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

## Controllers

## Presenters

## Decorators

## Services

## Logger