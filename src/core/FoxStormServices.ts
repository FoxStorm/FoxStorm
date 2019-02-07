import { Services } from 'foxstorm-container'
import { PrintLog, Printer } from '../services/logger/PrintLog'
import { Server } from '../services/server/Server'
import { Router } from '../services/router/Router'

export class FoxStormServices extends Services {
  static default () {
    const services = new this()

    services.registerServiceWithFactory(PrintLog, () => {
      return new PrintLog()
    })

    services.registerServiceWithInterfaceAndFactory(Router, Router.name, (container) => {
      const logger = container.retrieveServiceFor('Logger') as Printer
      const router = new Router(logger.print)

      return router
    })
    services.registerServiceWithInterface(Server, Server.name)

    return services
  }
}
