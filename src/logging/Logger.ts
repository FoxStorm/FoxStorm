import { LogLevel } from './LogLevel'
import { Logging } from './Logging'
import { PrintLogger } from './PrintLogger'

export class Logger extends PrintLogger implements Logging {
  verbose (str: string, file: string, func: string, line: number, column: number) {
    this.log(str, LogLevel.verbose, file, func, line, column)
  }

  debug (str: string, file: string, func: string, line: number, column: number) {
    this.log(str, LogLevel.debug, file, func, line, column)
  }

  info (str: string, file: string, func: string, line: number, column: number) {
    this.log(str, LogLevel.info, file, func, line, column)
  }

  warning (str: string, file: string, func: string, line: number, column: number) {
    this.log(str, LogLevel.warning, file, func, line, column)
  }

  error (str: string, file: string, func: string, line: number, column: number) {
    this.log(str, LogLevel.error, file, func, line, column)
  }
}
