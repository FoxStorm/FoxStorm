"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SourceLocation_1 = require("./SourceLocation");
class Debuggable extends Error {
    makeStackTrace() {
        if (this.stack === undefined) {
            return [];
        }
        return this.stack.split('\n');
    }
    makeSourceLocation() {
        if (this.stack === undefined) {
            return new SourceLocation_1.SourceLocation('', '', 0, 0);
        }
        const currentTrace = this.stack.split(/\n/)[1];
        const match = currentTrace.match(/at (\w+) \(\<\w+\>:(\d+):(\d+)/);
        if (match === null) {
            return new SourceLocation_1.SourceLocation('', '', 0, 0);
        }
        const [fullMatch, func, line, column] = match;
        return new SourceLocation_1.SourceLocation('', func, +line, +column);
    }
}
exports.Debuggable = Debuggable;
//# sourceMappingURL=Debuggable.js.map