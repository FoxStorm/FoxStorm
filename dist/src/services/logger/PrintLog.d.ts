import { PrintLogger as FoxStormPrintLogger, Logging } from 'foxstorm-logger';
export interface Printer extends Logging {
    print(str: string): void;
}
export declare class PrintLogger extends FoxStormPrintLogger implements Printer {
    verbose(str: string): void;
    debug(str: string): void;
    info(str: string): void;
    warning(str: string): void;
    error(str: string): void;
    print(str: string): void;
}
