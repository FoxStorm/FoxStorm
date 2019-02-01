import { Logger } from 'foxstorm-logger'
import { FrameworkError } from '../../FrameworkError'
import { StackFrame } from '../../StackFrame'

export class ErrorLogger extends Logger {
  report (e: FrameworkError, verbose: boolean = false) {
    const sourceLocation = e.sourceLocation
    const { file, func, line, column } = StackFrame.get()
    this.error(
      e.reason, file, func, line, column
    )

    if (verbose && e.suggestedFixes.length > 0) {
      const str = `Suggested fixes for ${e.typeIdentifier}: ${e.suggestedFixes.join(' ')}`
      this.debug(str, file, func, line, column)
    }

    if (verbose && e.possibleCauses.length > 0) {
      const str = `Possible causes for ${e.typeIdentifier}: " + ${e.possibleCauses.join(' ')}`
      this.debug(str, file, func, line, column)
    }
  }

  private lastPartOfFile (file: string): string {
    const parts = file.split('/')
    return parts[parts.length - 1] || file
  }
}
