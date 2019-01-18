"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrintLogger {
    log(str, level, file, func, line, column) {
        console.log(`[ ${level} ] ${str} (${file}:${func}:${line}:${column})`);
    }
}
exports.PrintLogger = PrintLogger;
//# sourceMappingURL=PrintLogger.js.map