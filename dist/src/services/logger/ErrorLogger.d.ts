import { Logger } from 'foxstorm-logger';
import { FrameworkError } from '../../FrameworkError';
export declare class ErrorLogger extends Logger {
    report(e: FrameworkError, verbose?: boolean): void;
    private lastPartOfFile;
}
