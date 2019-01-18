import * as restify from 'restify'
import { Route } from './Routing/Route'
import { HttpConfig } from './HttpConfig'

export interface Request extends restify.Request {}
export interface Response extends restify.Response {}
export interface Next extends restify.Next {}

export class ApiServer {

  private readonly restify: restify.Server

  constructor (readonly httpConfig: HttpConfig) {
    this.restify = restify.createServer()
  }

  start (port: number): void {
    this.restify.use(restify.plugins.queryParser())
    this.restify.use(restify.plugins.bodyParser())

    this.registerRoutes()
    this.registerMiddleware()

    this.restify.listen(port, () => console.log(`Server is up & running on port ${port}`))
  }

  registerRoutes (): void {
    this.httpConfig.routes.forEach((route: Route) => this.addRoute(route))
  }

  registerMiddleware (): void {
    this.httpConfig.middleware.forEach((middleware: any) => this.restify.use(middleware))
  }

  private addRoute (route: Route): void {
    const requestHandler: restify.RequestHandler = route.controller

    this.restify[route.method](route.endpoint, async (req, res, next) => {
      try {
        await requestHandler(req, res, next)
      } catch (e) {
        console.log(e)
        res.send(500, e)
      }
    })
    console.log(`Added route ${route.method.toUpperCase()} ${route.endpoint}`)
  }
}
