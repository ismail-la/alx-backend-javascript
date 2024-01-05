export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

 get name() {
    return this._name;
  }

  set name(val_name) {
    this._name = val_name;
  }

  get code() {
    return this._code;
  }

  set code(val_code) {
    this._name = val_code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
