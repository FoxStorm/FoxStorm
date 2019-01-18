export declare type StackFrame = {
    readonly file: string;
    readonly func: string;
    readonly line: number;
    readonly column: number;
};
export declare namespace StackFrame {
    function get(): {
        file: string;
        func: string;
        line: number;
        column: number;
    };
}
