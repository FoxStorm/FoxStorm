import { FoxStormServer } from 'foxstorm-server'
import { Routing } from 'foxstorm-routing'

export class Server extends FoxStormServer {
  static readonly TEMPLATE_ENGINE = 'ejs'

  constructor (readonly router: Routing) {
    super()
  }

  start (port: number, callback?: () => void): void {
    this.useRouter(this.router.router)
    this.listen(port, callback)
  }
}
