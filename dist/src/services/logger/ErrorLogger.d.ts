import { PrintLogger } from 'foxstorm-logger';
import { FrameworkError } from '../../FrameworkError';
export declare class ErrorLogger extends PrintLogger {
    report(e: FrameworkError, verbose?: boolean): void;
    private lastPartOfFile;
}
