'use strict';

var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("Suma - Test", function() {

  describe("Testeando", function() {

    it("Testeando suma", function() {
      expect(calculator.suma(1,1)).to.equal(1+1);
    });

  });
});