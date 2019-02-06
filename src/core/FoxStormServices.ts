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

    services.registerServiceWithInterface(FoxStormRouter, 'Router')
    services.registerServiceWithInterface(FoxStormServer, 'Server')

    return services
  }
}
