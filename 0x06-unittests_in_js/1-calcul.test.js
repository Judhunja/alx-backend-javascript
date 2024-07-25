const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('Addition', function () {
  describe('calculateNumber', function () {
    it('should round off numbers correctly', function () {
      assert.equal(calculateNumber('SUM', 1.999, 2), 4);
      assert.equal(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
      assert.equal(calculateNumber('DIVIDE', 1.7, 1.4), 2);
      assert.equal(calculateNumber('DIVIDE', 1.7, 0), 'Error');
    });
  });
});
