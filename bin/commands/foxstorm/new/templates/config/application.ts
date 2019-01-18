import { FoxStormServices, FoxStormContainer, Environment, FoxStormConfig } from 'foxstorm'
import { configure } from './configure'
import { boot } from './boot'

export const application = (environment: Environment): FoxStormContainer => {
  const config = new FoxStormConfig()
  const services = new FoxStormServices()

  try { configure(services) } catch (error) { /* */ }

  const foxStormFramework = new FoxStormContainer(config, environment, services)

  try { boot(foxStormFramework) } catch (error) { /* */ }

  return foxStormFramework
}
