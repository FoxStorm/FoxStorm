"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_logger_1 = require("foxstorm-logger");
const StackFrame_1 = require("../../StackFrame");
class Logger extends foxstorm_logger_1.PrintLogger {
    verbose(str) {
        const { file, func, line, column } = StackFrame_1.StackFrame.get();
        this.log(str, foxstorm_logger_1.LogLevel.verbose, file, func, line, column);
    }
    debug(str) {
        const { file, func, line, column } = StackFrame_1.StackFrame.get();
        this.log(str, foxstorm_logger_1.LogLevel.debug, file, func, line, column);
    }
    info(str) {
        const { file, func, line, column } = StackFrame_1.StackFrame.get();
        this.log(str, foxstorm_logger_1.LogLevel.info, file, func, line, column);
    }
    warning(str) {
        const { file, func, line, column } = StackFrame_1.StackFrame.get();
        this.log(str, foxstorm_logger_1.LogLevel.warning, file, func, line, column);
    }
    error(str) {
        const { file, func, line, column } = StackFrame_1.StackFrame.get();
        this.log(str, foxstorm_logger_1.LogLevel.error, file, func, line, column);
    }
    print(str) {
        Logger.printLogger(str);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map