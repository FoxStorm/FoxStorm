import { Logging } from './logging/Logging';
import { PrintLogger } from './logging/PrintLogger';
export declare class Logger extends PrintLogger implements Logging {
    verbose(str: string): void;
    debug(str: string): void;
    info(str: string): void;
    warning(str: string): void;
    error(str: string): void;
}
