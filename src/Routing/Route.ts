import { Request, Response } from 'restify'
import { FrameworkError } from '../FrameworkError'

type InvokableController = {
  readonly __invoke: (req: Request, res: Response) => void
}

export const __invoke = (controller: any) => { // tslint:disable-line
  return (controller as InvokableController).__invoke
}

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
    readonly controller: (req: Request, res: Response) => void | InvokableController
  ) {}

  static root (controller: (req: Request, res: Response) => void | InvokableController): Route {
    const action = this.retrieveAction(controller)
    return new this(RouteMethods.get, '/', action)
  }

  static get (endpoint: string, controller: (req: Request, res: Response) => void | InvokableController): Route {
    const action = this.retrieveAction(controller)
    return new this(RouteMethods.get, endpoint, action)
  }

  static post (endpoint: string, controller: (req: Request, res: Response) => void | InvokableController): Route {
    const action = this.retrieveAction(controller)
    return new this(RouteMethods.post, endpoint, action)
  }

  static put (endpoint: string, controller: (req: Request, res: Response) => void | InvokableController): Route {
    const action = this.retrieveAction(controller)
    return new this(RouteMethods.put, endpoint, action)
  }

  static del (endpoint: string, controller: (req: Request, res: Response) => void | InvokableController): Route {
    const action = this.retrieveAction(controller)
    return new this(RouteMethods.delete, endpoint, action)
  }

  private static retrieveAction (controller: (req: Request, res: Response) => void | InvokableController): (req: Request, res: Response) => void {
    if (typeof controller === 'function') {
      return controller
    }

    const invokableController = controller as InvokableController
    if (invokableController.__invoke !== undefined) {
      return invokableController.__invoke
    }

    throw new FrameworkError('Invalid route', 'Invalid Controller or Controller action passed')
  }
}
