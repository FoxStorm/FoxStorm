import { Services } from 'foxstorm-container'
import { PrintLogger } from '../services/logger/PrintLogger'

export class FoxStormServices extends Services {
  static default () {
    const services = new this()

    services.registerServiceWithFactory(PrintLogger, () => {
      return new PrintLogger()
    })

    return services
  }
}
