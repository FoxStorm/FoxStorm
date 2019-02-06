import { ApplicationServer } from 'foxstorm-server'
import { FoxStormApplication } from '../../core/FoxStormApplication'
import { FoxStormRouter } from '../router/FoxStormRouter'

export class FoxStormServer extends ApplicationServer {
  static makeService (container: FoxStormApplication) {
    const router = container.retrieveServiceFor('Router') as FoxStormRouter
    const server = new FoxStormServer(router)
    server.setViewEngine('ejs')

    return server
  }

  constructor (readonly router: FoxStormRouter) {
    super()
  }

  start (port: number, callback: () => void) {
    this.useRouter(this.router.router)
    this.listen(port, callback)
  }
}
