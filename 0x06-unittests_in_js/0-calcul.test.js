const calculateNumber = require('./0-calcul');
const assert = require('assert');


describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(2.0, 3.0), 5);
  });
  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });
  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });
  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.4, 3.0), 5);
  });
  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.0, 3.5), 6);
  });
  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(3.6, 3.5), 8);
  });
  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(3.6, 3.0), 7);
  });
  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(3.499999, 4.499999), 7);
  });
});
