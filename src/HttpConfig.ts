import { Route } from './Routing/Route'

export type HttpConfig = {
  readonly routes: Route[],
  readonly middleware: []
}
