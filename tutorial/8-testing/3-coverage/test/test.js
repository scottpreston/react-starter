import {Foo} from '../o.js';

var assert = require('assert');
describe('oo.js test', function() {
  describe('foo test', function() {
    it('getIt should return what the class is constructed with', function() {
      assert.equal(new Foo('a').getIt(),'a');
    });
  });
});