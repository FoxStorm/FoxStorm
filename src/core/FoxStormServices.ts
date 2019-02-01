import { Services } from 'foxstorm-container'
import { Logger } from '../services/logger/Logger'
import { FoxStormServer } from '../services/server/FoxStormServer'
import { FoxStormRouter } from '../services/router/FoxStormRouter'

export class FoxStormServices extends Services {
  static default () {
    const services = new this()

    services.registerServiceWithFactory(Logger, () => {
      return new Logger()
    })

    services.registerServiceWithInterfaceAndFactory(FoxStormRouter, 'Router', (container) => {
      const logger = container.retrieveServiceFor('Logger') as Logger
      return new FoxStormRouter(logger.print)
    })

    services.registerServiceWithInterfaceAndFactory(FoxStormServer, 'Server', (container) => {
      const router = container.retrieveServiceFor('Router') as FoxStormRouter
      const logger = container.retrieveServiceFor('Logger') as Logger

      return new FoxStormServer(router, logger)
    })

    return services
  }
}
