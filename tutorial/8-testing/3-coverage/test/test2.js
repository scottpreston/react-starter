import {Foo} from '../o.js';
var chai = require('chai');
var expect = chai.expect;

describe('oo.js test with chai', function() {
  describe('foo test', function() {
    it('getIt should return what the class is constructed with', function() {
      expect(new Foo('a').getIt()).to.equal('a');
    });
  });
});