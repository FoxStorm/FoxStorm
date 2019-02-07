import { FoxStormServer } from 'foxstorm-server'
import { Routing } from 'foxstorm-routing'
import { FoxStormApplication } from '../../core/FoxStormApplication'

export class Server extends FoxStormServer {
  static readonly TEMPLATE_ENGINE = 'ejs'

  static makeService (container: FoxStormApplication) {
    const router = container.retrieveServiceFor('Router') as Routing
    const server = new Server(router)
    server.setViewEngine(Server.TEMPLATE_ENGINE)

    return server
  }

  constructor (readonly router: Routing) {
    super()
  }

  start (port: number, callback?: () => void): void {
    this.useRouter(this.router.router)
    this.listen(port, callback)
  }
}
