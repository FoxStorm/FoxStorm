import { LogLevel } from './LogLevel';
import { Logging } from './Logging';
export declare class PrintLogger implements Logging {
    log(str: string, level: LogLevel, file: string, func: string, line: number, column: number): void;
}
