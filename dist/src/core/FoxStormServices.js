"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_container_1 = require("foxstorm-container");
const Logger_1 = require("../services/logger/Logger");
const FoxStormServer_1 = require("../services/server/FoxStormServer");
const FoxStormRouter_1 = require("../services/router/FoxStormRouter");
class FoxStormServices extends foxstorm_container_1.Services {
    static default() {
        const services = new this();
        services.registerServiceWithFactory(Logger_1.Logger, () => {
            return new Logger_1.Logger();
        });
        services.registerServiceWithInterfaceAndFactory(FoxStormRouter_1.FoxStormRouter, 'Router', (container) => {
            const logger = container.retrieveServiceFor('Logger');
            return new FoxStormRouter_1.FoxStormRouter(logger.print);
        });
        services.registerServiceWithInterfaceAndFactory(FoxStormServer_1.FoxStormServer, 'Server', (container) => {
            const router = container.retrieveServiceFor('Router');
            const logger = container.retrieveServiceFor('Logger');
            return new FoxStormServer_1.FoxStormServer(router, logger);
        });
        return services;
    }
}
exports.FoxStormServices = FoxStormServices;
//# sourceMappingURL=FoxStormServices.js.map