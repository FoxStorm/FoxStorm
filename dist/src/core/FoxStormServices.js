"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_container_1 = require("foxstorm-container");
const PrintLogger_1 = require("../services/logger/PrintLogger");
class FoxStormServices extends foxstorm_container_1.Services {
    static default() {
        const services = new this();
        services.registerServiceWithFactory(PrintLogger_1.PrintLogger, () => {
            return new PrintLogger_1.PrintLogger();
        });
        return services;
    }
}
exports.FoxStormServices = FoxStormServices;
//# sourceMappingURL=FoxStormServices.js.map