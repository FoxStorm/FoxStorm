import { Logging } from './Logging';
import { PrintLogger } from './PrintLogger';
export declare class Logger extends PrintLogger implements Logging {
    verbose(str: string, file: string, func: string, line: number, column: number): void;
    debug(str: string, file: string, func: string, line: number, column: number): void;
    info(str: string, file: string, func: string, line: number, column: number): void;
    warning(str: string, file: string, func: string, line: number, column: number): void;
    error(str: string, file: string, func: string, line: number, column: number): void;
}
