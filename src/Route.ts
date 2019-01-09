import { Request, Response } from 'restify'

enum RouteMethods {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'del'
}

export class Route {
  constructor (
    readonly method: RouteMethods,
    readonly endpoint: string,
    readonly controllerAction: (req: Request, res: Response) => void
  ) {}

  static get (endpoint: string, controllerAction: (req: Request, res: Response) => void): Route {
    return new this(RouteMethods.get, endpoint, controllerAction)
  }

  static post (endpoint: string, controllerAction: (req: Request, res: Response) => void) {
    return new this(RouteMethods.post, endpoint, controllerAction)
  }

  static put (endpoint: string, controllerAction: (req: Request, res: Response) => void): Route {
    return new this(RouteMethods.put, endpoint, controllerAction)
  }

  static del (endpoint: string, controllerAction: (req: Request, res: Response) => void): Route {
    return new this(RouteMethods.delete, endpoint, controllerAction)
  }
}
