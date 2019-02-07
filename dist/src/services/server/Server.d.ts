import { FoxStormServer } from 'foxstorm-server';
import { Routing } from 'foxstorm-routing';
export declare class Server extends FoxStormServer {
    readonly router: Routing;
    static readonly TEMPLATE_ENGINE: string;
    constructor(router: Routing);
    start(port: number, callback?: () => void): void;
}
