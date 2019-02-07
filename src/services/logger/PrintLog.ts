import { PrintLogger as FoxStormPrintLogger, Logging, LogLevel } from 'foxstorm-logger'
import { StackFrame } from '../../StackFrame'

export interface Printer extends Logging {
  print (str: string): void
}

export class PrintLogger extends FoxStormPrintLogger implements Printer {
  verbose (str: string): void {
    const { file, func, line, column } = StackFrame.get()
    this.log(str, LogLevel.verbose, file, func, line, column)
  }

  debug (str: string): void {
    const { file, func, line, column } = StackFrame.get()
    this.log(str, LogLevel.debug, file, func, line, column)
  }

  info (str: string): void {
    const { file, func, line, column } = StackFrame.get()
    this.log(str, LogLevel.info, file, func, line, column)
  }

  warning (str: string): void {
    const { file, func, line, column } = StackFrame.get()
    this.log(str, LogLevel.warning, file, func, line, column)
  }

  error (str: string): void {
    const { file, func, line, column } = StackFrame.get()
    this.log(str, LogLevel.error, file, func, line, column)
  }

  print (str: string): void {
    PrintLogger.printLogger(str)
  }
}
