import { Environment } from 'foxstorm-container'

export class FoxStormEnvironment extends Environment {
  static detect (environmentValue: string): Environment {
    if (!environmentValue) {
      return this.development()
    }

    switch (environmentValue) {
      case 'prod':
      case 'production': {
        return this.production()
        break
      }
      case 'dev':
      case 'development': {
        return this.development()
        break
      }
      case 'test':
      case 'testing': {
        return this.testing()
        break
      }
      default: {
        return new this(environmentValue, false)
      }
    }
  }
}
