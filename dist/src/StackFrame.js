"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stackTrace = require("stack-trace");
var StackFrame;
(function (StackFrame) {
    function get() {
        const stackFrame = stackTrace.get()[2];
        return {
            file: stackFrame.getFileName(),
            func: stackFrame.getFunctionName(),
            line: stackFrame.getLineNumber(),
            column: stackFrame.getColumnNumber()
        };
    }
    StackFrame.get = get;
})(StackFrame = exports.StackFrame || (exports.StackFrame = {}));
//# sourceMappingURL=StackFrame.js.map