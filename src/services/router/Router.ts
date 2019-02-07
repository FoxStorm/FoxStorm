import { FoxStormRouter, Routing } from 'foxstorm-routing'
import { ApplicationContainer } from 'foxstorm-container'
import { ConsoleLogging } from '../interfaces/ConsoleLogging'

export class Router extends FoxStormRouter {
  static makeService (container: ApplicationContainer): Routing {
    const logger = container.retrieveServiceFor('Logger') as ConsoleLogging
    const router = new this(logger.print)

    return router
  }
}
