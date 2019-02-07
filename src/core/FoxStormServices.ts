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

    return services
  }
}
