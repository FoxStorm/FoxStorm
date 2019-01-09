import { Route } from './Route'

export type HttpConfig = {
  readonly routes: Route[],
  readonly middleware: []
}
