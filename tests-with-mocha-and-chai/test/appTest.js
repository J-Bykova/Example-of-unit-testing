const assert = require('chai').assert;
const app = require('../app');

sayHelloResult = app.sayHello();
getSumOfNumsResult = app.getSumOfNums(3, 4);

describe('App', function () {
  describe('sayHello()', function () {
    it('sayHello should return Hello', function () {
      assert.equal(sayHelloResult, 'Hello');
    });

    it('sayHello should return type string', function () {
      assert.typeOf(sayHelloResult, 'string');
    });
  })

  describe('getSumOfNums()', function () {
    it('getSumOfNums should return number above 5', function () {
      assert.isAbove(getSumOfNumsResult, 5);
    });

    it('getSumOfNums should return type number', function () {
      assert.typeOf(getSumOfNumsResult, 'number');
    });
  })
})
