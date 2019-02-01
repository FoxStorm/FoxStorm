"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const foxstorm_container_1 = require("foxstorm-container");
const FrameworkError_1 = require("../FrameworkError");
class FoxStormApplication extends foxstorm_container_1.ApplicationContainer {
    constructor(config, environment, services, logger = () => { }) {
        super(config, environment, services);
        this.config = config;
        this.environment = environment;
        this.services = services;
        this.logger = logger;
        this.logger(`\n ${'*'.repeat(9)} FoxStorm Initialized ${'*'.repeat(9)} \n`);
        this.bootProviders();
    }
    bootProviders() {
        return __awaiter(this, void 0, void 0, function* () {
            const providers = this.services.providers;
            if (providers.length > 0) {
                this.logger('Booting providers ...');
            }
            else {
                this.logger('-- No Providers registered');
            }
            providers.map((provider) => __awaiter(this, void 0, void 0, function* () {
                try {
                    this.logger(`-- ${provider.constructor.name} willBoot`);
                    return yield provider.willBoot(this);
                }
                catch (_a) {
                    throw new FrameworkError_1.FrameworkError('providerBoot', `Provider ${provider.constructor.name} pre-boot failed`);
                }
            }));
            providers.map((provider) => __awaiter(this, void 0, void 0, function* () {
                try {
                    this.logger(`-- ${provider.constructor.name} didBoot`);
                    return yield provider.didBoot(this);
                }
                catch (_b) {
                    throw new FrameworkError_1.FrameworkError('providerBoot', `Provider ${provider.constructor.name} boot failed`);
                }
            }));
        });
    }
}
exports.FoxStormApplication = FoxStormApplication;
//# sourceMappingURL=FoxStormApplication.js.map