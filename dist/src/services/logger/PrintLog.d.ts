import { PrintLogger, Logging } from 'foxstorm-logger';
export interface Printer extends Logging {
    print(str: string): void;
}
export declare class PrintLog extends PrintLogger implements Printer {
    verbose(str: string): void;
    debug(str: string): void;
    info(str: string): void;
    warning(str: string): void;
    error(str: string): void;
    print(str: string): void;
}
