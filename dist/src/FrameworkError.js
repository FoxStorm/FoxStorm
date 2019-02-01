"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_debuggable_1 = require("foxstorm-debuggable");
class FrameworkError extends foxstorm_debuggable_1.Debuggable {
    constructor(typeIdentifier, reason, suggestedFixes = [], possibleCauses = []) {
        super(reason);
        this.typeIdentifier = typeIdentifier;
        this.reason = reason;
        this.suggestedFixes = suggestedFixes;
        this.possibleCauses = possibleCauses;
        this.readableName = 'Framework Error';
        this.sourceLocation = this.makeSourceLocation();
        this.stackTrace = this.makeStackTrace();
    }
}
exports.FrameworkError = FrameworkError;
//# sourceMappingURL=FrameworkError.js.map