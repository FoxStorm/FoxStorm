"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_logger_1 = require("foxstorm-logger");
const StackFrame_1 = require("../../StackFrame");
class ErrorLogger extends foxstorm_logger_1.PrintLogger {
    report(e, verbose = false) {
        const sourceLocation = e.sourceLocation;
        const { file, func, line, column } = StackFrame_1.StackFrame.get();
        this.error(e.reason, file, func, line, column);
        if (verbose && e.suggestedFixes.length > 0) {
            const str = `Suggested fixes for ${e.typeIdentifier}: ${e.suggestedFixes.join(' ')}`;
            this.debug(str, file, func, line, column);
        }
        if (verbose && e.possibleCauses.length > 0) {
            const str = `Possible causes for ${e.typeIdentifier}: " + ${e.possibleCauses.join(' ')}`;
            this.debug(str, file, func, line, column);
        }
    }
    lastPartOfFile(file) {
        const parts = file.split('/');
        return parts[parts.length - 1] || file;
    }
}
exports.ErrorLogger = ErrorLogger;
//# sourceMappingURL=ErrorLogger.js.map