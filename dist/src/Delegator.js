"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Delegator {
    constructor(object) {
        this.applyMixins(this.constructor, object.constructor);
        this.applyProperties(object);
    }
    applyMixins(derivedConstructor, baseConstructor) {
        Object.getOwnPropertyNames(baseConstructor.prototype).forEach(name => {
            derivedConstructor.prototype[name] = baseConstructor.prototype[name];
        });
    }
    applyProperties(base) {
        for (const key in base) {
            this[key] = base[key];
        }
    }
}
exports.Delegator = Delegator;
//# sourceMappingURL=Delegator.js.map