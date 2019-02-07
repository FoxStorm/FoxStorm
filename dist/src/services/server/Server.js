"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_server_1 = require("foxstorm-server");
class Server extends foxstorm_server_1.FoxStormServer {
    constructor(router) {
        super();
        this.router = router;
    }
    static makeService(container) {
        const router = container.retrieveServiceFor('Router');
        const server = new Server(router);
        server.setViewEngine(Server.TEMPLATE_ENGINE);
        return server;
    }
    start(port, callback) {
        this.useRouter(this.router.router);
        this.listen(port, callback);
    }
}
Server.TEMPLATE_ENGINE = 'ejs';
exports.Server = Server;
//# sourceMappingURL=Server.js.map