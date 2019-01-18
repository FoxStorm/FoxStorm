"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
const PrintLogger_1 = require("./PrintLogger");
class Logger extends PrintLogger_1.PrintLogger {
    verbose(str, file, func, line, column) {
        this.log(str, LogLevel_1.LogLevel.verbose, file, func, line, column);
    }
    debug(str, file, func, line, column) {
        this.log(str, LogLevel_1.LogLevel.debug, file, func, line, column);
    }
    info(str, file, func, line, column) {
        this.log(str, LogLevel_1.LogLevel.info, file, func, line, column);
    }
    warning(str, file, func, line, column) {
        this.log(str, LogLevel_1.LogLevel.warning, file, func, line, column);
    }
    error(str, file, func, line, column) {
        this.log(str, LogLevel_1.LogLevel.error, file, func, line, column);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map