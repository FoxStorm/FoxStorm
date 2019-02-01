"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_server_1 = require("foxstorm-server");
class FoxStormServer extends foxstorm_server_1.ApplicationServer {
    constructor(router, logger) {
        super();
        this.router = router;
        this.logger = logger;
    }
    static makeService(container) {
        const router = container.retrieveServiceFor('Router');
        const logger = container.retrieveServiceFor('Logger');
        return new this(router, logger);
    }
    start(port, callback) {
        this.useRouter(this.router.router);
        this.listen(port, callback);
    }
}
exports.FoxStormServer = FoxStormServer;
//# sourceMappingURL=FoxStormServer.js.map