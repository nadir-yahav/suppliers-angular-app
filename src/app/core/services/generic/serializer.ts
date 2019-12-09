export class Serializer<T> {
  constructor(private obj: new () => T) {}

  fromJson(json: any): T {
    return Object.assign(new this.obj(), json);
  }
  toJson(services: T): any {
    return Object.assign({}, services);
  }
}
