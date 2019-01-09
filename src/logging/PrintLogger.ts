import { LogLevel } from './LogLevel'
import { Logging } from './Logging'

export class PrintLogger implements Logging {
  log (str: string, level: LogLevel, file: string, func: string, line: number, column: number) {
    console.log(`[ ${level} ] ${str} (${file}:${func}:${line}:${column})`)
  }
}
