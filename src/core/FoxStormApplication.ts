import { ApplicationContainer } from 'foxstorm-container'
import { FoxStormConfig } from './FoxStormConfig'
import { FoxStormEnvironment } from './FoxStormEnvironment'
import { FoxStormServices } from './FoxStormServices'
import { FrameworkError } from '../FrameworkError'

interface Logger {
  (message: string): void
}

export class FoxStormApplication extends ApplicationContainer {
  constructor (
    readonly config: FoxStormConfig,
    readonly environment: FoxStormEnvironment,
    readonly services: FoxStormServices,
    readonly logger: Logger = () => { /* */ }
  ) {
    super(config, environment, services)
    this.logger(`\n ${'*'.repeat(9)} FoxStorm Initialized ${'*'.repeat(9)} \n`)
    this.bootProviders()
  }

  private async bootProviders () {
    const providers = this.services.providers

    if (providers.length > 0) {
      this.logger('Booting providers ...')
    } else {
      this.logger('-- No Providers registered')
    }

    providers.map(async provider => {
      try {
        this.logger(`-- ${provider.constructor.name} willBoot`)
        return await provider.willBoot(this)
      } catch { throw new FrameworkError('providerBoot', `Provider ${provider.constructor.name} pre-boot failed`) }
    })
    providers.map(async provider => {
      try {
        this.logger(`-- ${provider.constructor.name} didBoot`)
        return await provider.didBoot(this)
      } catch { throw new FrameworkError('providerBoot', `Provider ${provider.constructor.name} boot failed`) }
    })
  }
}
