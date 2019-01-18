import { LogLevel } from './LogLevel';
export interface Logging {
    log(str: string, level: LogLevel, file: string, func: string, line: number, column: number): void;
}
