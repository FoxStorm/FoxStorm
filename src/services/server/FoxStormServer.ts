import { ApplicationServer } from 'foxstorm-server'
import { FoxStormApplication } from '../../container/FoxStormApplication'
import { FoxStormRouter } from '../router/FoxStormRouter'

export class FoxStormServer extends ApplicationServer {
  static makeService (container: FoxStormApplication) {
    // const router = container.retrieveServiceFor('Router')
    // const logger = container.retrieveServiceFor('Logger')
    // return new this(router, logger)
  }
  constructor (readonly router: FoxStormRouter, readonly logger: any) {
    super()
  }

  start (port: number, callback: () => void) {
    this.useRouter(this.router.router)
    this.listen(port, callback)
  }
}
