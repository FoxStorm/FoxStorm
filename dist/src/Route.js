"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RouteMethods;
(function (RouteMethods) {
    RouteMethods["get"] = "get";
    RouteMethods["post"] = "post";
    RouteMethods["put"] = "put";
    RouteMethods["delete"] = "del";
})(RouteMethods || (RouteMethods = {}));
class Route {
    constructor(method, endpoint, controllerAction) {
        this.method = method;
        this.endpoint = endpoint;
        this.controllerAction = controllerAction;
    }
    static get(endpoint, controllerAction) {
        return new this(RouteMethods.get, endpoint, controllerAction);
    }
    static post(endpoint, controllerAction) {
        return new this(RouteMethods.post, endpoint, controllerAction);
    }
    static put(endpoint, controllerAction) {
        return new this(RouteMethods.put, endpoint, controllerAction);
    }
    static del(endpoint, controllerAction) {
        return new this(RouteMethods.delete, endpoint, controllerAction);
    }
}
exports.Route = Route;
//# sourceMappingURL=Route.js.map