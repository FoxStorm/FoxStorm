"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_container_1 = require("foxstorm-container");
const PrintLog_1 = require("../services/logger/PrintLog");
class FoxStormServices extends foxstorm_container_1.Services {
    static default() {
        const services = new this();
        services.registerServiceWithFactory(PrintLog_1.PrintLogger, () => {
            return new PrintLog_1.PrintLogger();
        });
        return services;
    }
}
exports.FoxStormServices = FoxStormServices;
//# sourceMappingURL=FoxStormServices.js.map