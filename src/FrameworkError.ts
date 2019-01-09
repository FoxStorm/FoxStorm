import { Debug } from './debugging/Debug'
import { Debuggable } from './debugging/Debuggable'
import { SourceLocation } from './debugging/SourceLocation'

export class FrameworkError extends Debuggable implements Debug {
  public readonly readableName = 'Framework Error'
  public readonly sourceLocation: SourceLocation
  public readonly stackTrace: string[]

  constructor (
    readonly typeIdentifier: string,
    readonly reason: string,
    readonly suggestedFixes: string[] = [],
    readonly possibleCauses: string[] = []
  ) {
    super(reason)
    this.sourceLocation = this.makeSourceLocation()
    this.stackTrace = this.makeStackTrace()
  }
}
