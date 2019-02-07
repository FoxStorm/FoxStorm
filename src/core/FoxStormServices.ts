import { Services } from 'foxstorm-container'
import { PrintLogger, Printer } from '../services/logger/PrintLog'
import { Server } from '../services/server/Server'
import { Router } from '../services/router/Router'

export class FoxStormServices extends Services {
  static default () {
    const services = new this()

    services.registerServiceWithFactory(PrintLogger, () => {
      return new PrintLogger()
    })

    services.registerServiceWithInterfaceAndFactory(Router, Router.name, (container) => {
      const logger = container.retrieveServiceFor('PrintLogger') as Printer
      const router = new Router(logger.print)

      return router
    })
    services.registerServiceWithInterface(Server, Server.name)

    return services
  }
}
