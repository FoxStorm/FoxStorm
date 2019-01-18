export class Delegator {
  constructor (object: any) {
    this.applyMixins(this.constructor, object.constructor)
    this.applyProperties(object)
  }

  applyMixins (derivedConstructor: any, baseConstructor: any) {
    Object.getOwnPropertyNames(baseConstructor.prototype).forEach(name => {
      derivedConstructor.prototype[name] = baseConstructor.prototype[name]
    })
  }

  applyProperties (base: any) {
    for (const key in base) {
      (this as any)[key] = base[key]
    }
  }
}
