const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('Addition', function () {
  describe('calculateNumber', function () {
    it('should round off numbers correctly', function () {
      assert.equal(calculateNumber(1.999, 2), 4);
      assert.equal(calculateNumber(1.5, 1.5), 4);
      assert.equal(calculateNumber(1.7, 1.4), 3);
      assert.equal(calculateNumber(1.7, 1.4), 3);
    });
  });
});
