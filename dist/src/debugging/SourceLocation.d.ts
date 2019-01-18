export declare class SourceLocation {
    readonly file: string;
    readonly func: string;
    readonly line: number;
    readonly column: number;
    readonly range?: number[] | undefined;
    constructor(file: string, func: string, line: number, column: number, range?: number[] | undefined);
}
