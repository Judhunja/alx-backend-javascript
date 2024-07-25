const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require("./1-calcul.js");

describe('test calculateNumber function', function () {
  describe('calculateNumber', function () {
    it('should round off numbers correctly', function () {
      expect(calculateNumber('SUM', 1.999, 2)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
      expect(calculateNumber('DIVIDE', 1.7, 1.4)).to.equal(2);
      expect(calculateNumber('DIVIDE', 1.7, 0)).to.equal('Error');
    });
  });
});
