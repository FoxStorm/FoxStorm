import { FoxStormRouter, Routing } from 'foxstorm-routing';
import { ApplicationContainer } from 'foxstorm-container';
export declare class Router extends FoxStormRouter {
    static makeService(container: ApplicationContainer): Routing;
}
