import { SourceLocation } from './SourceLocation';
export declare class Debuggable extends Error {
    protected makeStackTrace(): string[];
    protected makeSourceLocation(): SourceLocation;
}
