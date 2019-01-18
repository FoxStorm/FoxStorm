import * as restify from 'restify';
import { HttpConfig } from './HttpConfig';
export interface Request extends restify.Request {
}
export interface Response extends restify.Response {
}
export interface Next extends restify.Next {
}
export declare class ApiServer {
    readonly httpConfig: HttpConfig;
    private readonly restify;
    constructor(httpConfig: HttpConfig);
    start(port: number): void;
    registerRoutes(): void;
    registerMiddleware(): void;
    private addRoute;
}
