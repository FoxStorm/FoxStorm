import { Logger } from './logging/Logger';
import { FrameworkError } from './FrameworkError';
export declare class ErrorLogger extends Logger {
    report(e: FrameworkError, verbose?: boolean): void;
    private lastPartOfFile;
}
