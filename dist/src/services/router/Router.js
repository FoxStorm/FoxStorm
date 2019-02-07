"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_routing_1 = require("foxstorm-routing");
class Router extends foxstorm_routing_1.FoxStormRouter {
    static makeService(container) {
        const logger = container.retrieveServiceFor('Logger');
        const router = new this(logger.print);
        return router;
    }
}
exports.Router = Router;
//# sourceMappingURL=Router.js.map