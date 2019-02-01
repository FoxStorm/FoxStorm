import { Logging, PrintLogger, LogLevel } from 'foxstorm-logger'
import { StackFrame } from '../../StackFrame'

export class Logger extends PrintLogger implements Logging {
  verbose (str: string) {
    const { file, func, line, column } = StackFrame.get()
    this.log(str, LogLevel.verbose, file, func, line, column)
  }

  debug (str: string) {
    const { file, func, line, column } = StackFrame.get()
    this.log(str, LogLevel.debug, file, func, line, column)
  }

  info (str: string) {
    const { file, func, line, column } = StackFrame.get()
    this.log(str, LogLevel.info, file, func, line, column)
  }

  warning (str: string) {
    const { file, func, line, column } = StackFrame.get()
    this.log(str, LogLevel.warning, file, func, line, column)
  }

  error (str: string) {
    const { file, func, line, column } = StackFrame.get()
    this.log(str, LogLevel.error, file, func, line, column)
  }

  print (str: string) {
    Logger.printLogger(str)
  }
}
