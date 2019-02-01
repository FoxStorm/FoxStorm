import { ApplicationServer } from 'foxstorm-server';
import { FoxStormApplication } from '../../core/FoxStormApplication';
import { FoxStormRouter } from '../router/FoxStormRouter';
export declare class FoxStormServer extends ApplicationServer {
    readonly router: FoxStormRouter;
    readonly logger: any;
    static makeService(container: FoxStormApplication): FoxStormServer;
    constructor(router: FoxStormRouter, logger: any);
    start(port: number, callback: () => void): void;
}
