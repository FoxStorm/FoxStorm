import { SourceLocation } from './SourceLocation'

export class Debuggable extends Error {
  protected makeStackTrace (): string[] {
    if (this.stack === undefined) {
      return []
    }
    return this.stack.split('\n')
  }

  protected makeSourceLocation (): SourceLocation {
    if (this.stack === undefined) {
      return new SourceLocation('', '', 0, 0)
    }

    const currentTrace = this.stack.split(/\n/)[1]
    const match = currentTrace.match(/at (\w+) \(\<\w+\>:(\d+):(\d+)/)

    if (match === null) {
      return new SourceLocation('', '', 0, 0)
    }

    const [ fullMatch , func, line, column] = match
    return new SourceLocation('', func, +line, +column)
  }
}
