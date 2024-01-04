export default class HolbertonClass {
  constructor(size, location) {
    this._value = size;
    this._value = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
