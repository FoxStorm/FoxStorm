import { FoxStormServer } from 'foxstorm-server';
import { Routing } from 'foxstorm-routing';
import { FoxStormApplication } from '../../core/FoxStormApplication';
export declare class Server extends FoxStormServer {
    readonly router: Routing;
    static readonly TEMPLATE_ENGINE: string;
    static makeService(container: FoxStormApplication): Server;
    constructor(router: Routing);
    start(port: number, callback?: () => void): void;
}
