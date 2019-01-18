import { SourceLocation } from './SourceLocation';
export interface Debug {
    readonly readableName: string;
    readonly typeIdentifier: string;
    readonly reason: string;
    readonly sourceLocation: SourceLocation;
    readonly stackTrace?: string[];
    readonly possibleCauses: string[];
}
