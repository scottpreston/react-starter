import {Foo, Fetcher} from '../o.js';
var chai = require('chai');
var expect = chai.expect;

describe('oo.js async', function() {
  describe('fetch test', function() {
    it('it should return some data', function(done) {
      Fetcher.get(function(data) {
        expect(data.list).to.have.lengthOf(3);
        done();
      });
     });
  });
});