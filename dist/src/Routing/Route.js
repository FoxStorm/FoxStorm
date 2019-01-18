"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameworkError_1 = require("../FrameworkError");
exports.__invoke = (controller) => {
    return controller.__invoke;
};
var RouteMethods;
(function (RouteMethods) {
    RouteMethods["get"] = "get";
    RouteMethods["post"] = "post";
    RouteMethods["put"] = "put";
    RouteMethods["delete"] = "del";
})(RouteMethods || (RouteMethods = {}));
class Route {
    constructor(method, endpoint, controller) {
        this.method = method;
        this.endpoint = endpoint;
        this.controller = controller;
    }
    static root(controller) {
        const action = this.retrieveAction(controller);
        return new this(RouteMethods.get, '/', action);
    }
    static get(endpoint, controller) {
        const action = this.retrieveAction(controller);
        return new this(RouteMethods.get, endpoint, action);
    }
    static post(endpoint, controller) {
        const action = this.retrieveAction(controller);
        return new this(RouteMethods.post, endpoint, action);
    }
    static put(endpoint, controller) {
        const action = this.retrieveAction(controller);
        return new this(RouteMethods.put, endpoint, action);
    }
    static del(endpoint, controller) {
        const action = this.retrieveAction(controller);
        return new this(RouteMethods.delete, endpoint, action);
    }
    static retrieveAction(controller) {
        if (typeof controller === 'function') {
            return controller;
        }
        const invokableController = controller;
        if (invokableController.__invoke !== undefined) {
            return invokableController.__invoke;
        }
        throw new FrameworkError_1.FrameworkError('Invalid route', 'Invalid Controller or Controller action passed');
    }
}
exports.Route = Route;
//# sourceMappingURL=Route.js.map