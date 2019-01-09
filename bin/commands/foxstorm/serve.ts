import { HttpConfig } from '../../../src/HttpConfig'
import { ApiServer } from '../../../src/ApiServer'

export const serve = {
  command: 'serve',
  describe: 'Starts the FoxStorm server',
  handler: (argv: any) => {
    const { ROUTES } = require(`${process.cwd()}/http/routes.ts`)
    const { MIDDLEWARE } = require(`${process.cwd()}/http/middleware.ts`)
    const emailConfig = require(`${process.cwd()}/config/email.ts`)

    const httpConfig: HttpConfig = { routes: ROUTES, middleware: MIDDLEWARE }

    const server = new ApiServer(httpConfig)
    server.start(8081)
  }
}
