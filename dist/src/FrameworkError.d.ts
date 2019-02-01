import { Debuggable, Debug, SourceLocation } from 'foxstorm-debuggable';
export declare class FrameworkError extends Debuggable implements Debug {
    readonly typeIdentifier: string;
    readonly reason: string;
    readonly suggestedFixes: string[];
    readonly possibleCauses: string[];
    readonly readableName: string;
    readonly sourceLocation: SourceLocation;
    readonly stackTrace: string[];
    constructor(typeIdentifier: string, reason: string, suggestedFixes?: string[], possibleCauses?: string[]);
}
