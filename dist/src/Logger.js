"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrintLogger_1 = require("./logging/PrintLogger");
const LogLevel_1 = require("./logging/LogLevel");
const StackFrame_1 = require("./StackFrame");
class Logger extends PrintLogger_1.PrintLogger {
    verbose(str) {
        const { file, func, line, column } = StackFrame_1.StackFrame.get();
        this.log(str, LogLevel_1.LogLevel.verbose, file, func, line, column);
    }
    debug(str) {
        const { file, func, line, column } = StackFrame_1.StackFrame.get();
        this.log(str, LogLevel_1.LogLevel.debug, file, func, line, column);
    }
    info(str) {
        const { file, func, line, column } = StackFrame_1.StackFrame.get();
        this.log(str, LogLevel_1.LogLevel.info, file, func, line, column);
    }
    warning(str) {
        const { file, func, line, column } = StackFrame_1.StackFrame.get();
        this.log(str, LogLevel_1.LogLevel.warning, file, func, line, column);
    }
    error(str) {
        const { file, func, line, column } = StackFrame_1.StackFrame.get();
        this.log(str, LogLevel_1.LogLevel.error, file, func, line, column);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map