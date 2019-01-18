"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Debuggable_1 = require("./debugging/Debuggable");
class FrameworkError extends Debuggable_1.Debuggable {
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