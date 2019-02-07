export interface Request {
}
export interface Response {
    readonly send: Send;
    render(view: string, options?: object, callback?: (err: Error, html: string) => void): void;
    render(view: string, callback?: (err: Error, html: string) => void): void;
}
declare type Send = (body?: any) => Response;
export declare type InvokableController = {
    readonly __invoke: (req: Request, res: Response) => void;
};
export declare type RequestHandler = {
    (req: Request, res: Response): void | InvokableController;
};
export interface Routing {
    readonly router: any;
    root(requestHandler: RequestHandler): void;
    get(endpoint: any, controller?: RequestHandler): void;
    post(endpoint: any, controller?: RequestHandler): void;
    put(endpoint: any, controller?: RequestHandler): void;
    delete(endpoint: any, controller?: RequestHandler): void;
    resource(model: any): Promise<void>;
}
export {};
