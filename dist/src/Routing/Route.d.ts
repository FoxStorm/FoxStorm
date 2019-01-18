import { Request, Response } from 'restify';
declare type InvokableController = {
    readonly __invoke: (req: Request, res: Response) => void;
};
export declare const __invoke: (controller: any) => (req: Request, res: Response) => void;
declare enum RouteMethods {
    get = "get",
    post = "post",
    put = "put",
    delete = "del"
}
export declare class Route {
    readonly method: RouteMethods;
    readonly endpoint: string;
    readonly controller: (req: Request, res: Response) => void | InvokableController;
    constructor(method: RouteMethods, endpoint: string, controller: (req: Request, res: Response) => void | InvokableController);
    static root(controller: (req: Request, res: Response) => void | InvokableController): Route;
    static get(endpoint: string, controller: (req: Request, res: Response) => void | InvokableController): Route;
    static post(endpoint: string, controller: (req: Request, res: Response) => void | InvokableController): Route;
    static put(endpoint: string, controller: (req: Request, res: Response) => void | InvokableController): Route;
    static del(endpoint: string, controller: (req: Request, res: Response) => void | InvokableController): Route;
    private static retrieveAction;
}
export {};
