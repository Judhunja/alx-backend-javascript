export default class HolbertonClass {
  constructor(size, location) {
    this._value = size;
    this._value = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
