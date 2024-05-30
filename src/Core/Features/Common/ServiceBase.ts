export class ServiceBase<T> {
  public store: T;

  constructor( store: T) {
    // Router is an example of another member, here.
    console.log("ServiceBase.constructor");

    this.store = store;
  }
}