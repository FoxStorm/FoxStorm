export interface Serving {
  start (port: number, callback?: () => void): void
}
