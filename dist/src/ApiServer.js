"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
class ApiServer {
    constructor(httpConfig) {
        this.httpConfig = httpConfig;
        this.restify = restify.createServer();
    }
    start(port) {
        this.restify.use(restify.plugins.queryParser());
        this.restify.use(restify.plugins.bodyParser());
        this.registerRoutes();
        this.registerMiddleware();
        this.restify.listen(port, () => console.log(`Server is up & running on port ${port}`));
    }
    registerRoutes() {
        this.httpConfig.routes.forEach((route) => this.addRoute(route));
    }
    registerMiddleware() {
        this.httpConfig.middleware.forEach((middleware) => this.restify.use(middleware));
    }
    addRoute(route) {
        const requestHandler = route.controller;
        this.restify[route.method](route.endpoint, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield requestHandler(req, res, next);
            }
            catch (e) {
                console.log(e);
                res.send(500, e);
            }
        }));
        console.log(`Added route ${route.method.toUpperCase()} ${route.endpoint}`);
    }
}
exports.ApiServer = ApiServer;
//# sourceMappingURL=ApiServer.js.map