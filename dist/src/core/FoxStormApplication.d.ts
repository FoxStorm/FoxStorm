import { ApplicationContainer } from 'foxstorm-container';
import { FoxStormConfig } from './FoxStormConfig';
import { FoxStormEnvironment } from './FoxStormEnvironment';
import { FoxStormServices } from './FoxStormServices';
interface Logger {
    (message: string): void;
}
export declare class FoxStormApplication extends ApplicationContainer {
    readonly config: FoxStormConfig;
    readonly environment: FoxStormEnvironment;
    readonly services: FoxStormServices;
    readonly logger: Logger;
    constructor(config: FoxStormConfig, environment: FoxStormEnvironment, services: FoxStormServices, logger?: Logger);
    private bootProviders;
}
export {};
