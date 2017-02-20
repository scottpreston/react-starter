import r from '../reduce';
var chai = require('chai');
var expect = chai.expect;

describe('reducer test with chai', function() {
  describe('test INIT reducer', function() {
    it('no action should return new state with names', function() {
      var initialState = r([],{type:'INIT',names:[]});
      expect(initialState.names).to.exist;
    });
  });
});