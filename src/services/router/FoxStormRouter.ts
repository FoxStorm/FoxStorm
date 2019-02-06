import { Router } from 'foxstorm-routing'
import { ApplicationContainer } from 'foxstorm-container'
import { Logger } from '../logger/Logger'

export class FoxStormRouter extends Router {
  static makeService (container: ApplicationContainer) {
    const logger = container.retrieveServiceFor('Logger') as Logger
    const router = new this(logger.print)

    return router
  }
}
