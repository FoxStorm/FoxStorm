"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_container_1 = require("foxstorm-container");
const PrintLog_1 = require("../services/logger/PrintLog");
const Server_1 = require("../services/server/Server");
const Router_1 = require("../services/router/Router");
class FoxStormServices extends foxstorm_container_1.Services {
    static default() {
        const services = new this();
        services.registerServiceWithFactory(PrintLog_1.PrintLog, () => {
            return new PrintLog_1.PrintLog();
        });
        services.registerServiceWithInterfaceAndFactory(Router_1.Router, Router_1.Router.name, (container) => {
            const logger = container.retrieveServiceFor('Logger');
            const router = new Router_1.Router(logger.print);
            return router;
        });
        services.registerServiceWithInterface(Server_1.Server, Server_1.Server.name);
        return services;
    }
}
exports.FoxStormServices = FoxStormServices;
//# sourceMappingURL=FoxStormServices.js.map