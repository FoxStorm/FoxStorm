"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiServer_1 = require("../../../src/ApiServer");
exports.serve = {
    command: 'serve',
    describe: 'Starts the FoxStorm server',
    handler: (argv) => {
        const { ROUTES } = require(`${process.cwd()}/http/routes.ts`);
        const { MIDDLEWARE } = require(`${process.cwd()}/http/middleware.ts`);
        const emailConfig = require(`${process.cwd()}/config/email.ts`);
        const httpConfig = { routes: ROUTES, middleware: MIDDLEWARE };
        const server = new ApiServer_1.ApiServer(httpConfig);
        server.start(8081);
    }
};
//# sourceMappingURL=serve.js.map