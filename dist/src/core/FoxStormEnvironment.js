"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_container_1 = require("foxstorm-container");
class FoxStormEnvironment extends foxstorm_container_1.Environment {
    static detect(environmentValue) {
        if (!environmentValue) {
            return this.development();
        }
        switch (environmentValue) {
            case 'prod':
            case 'production': {
                return this.production();
                break;
            }
            case 'dev':
            case 'development': {
                return this.development();
                break;
            }
            case 'test':
            case 'testing': {
                return this.testing();
                break;
            }
            default: {
                return new this(environmentValue, false);
            }
        }
    }
}
exports.FoxStormEnvironment = FoxStormEnvironment;
//# sourceMappingURL=FoxStormEnvironment.js.map