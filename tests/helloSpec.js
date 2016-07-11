import React from 'react'
import {Hello} from '../src/Hello.js';
import { assert } from 'chai'

//var Hello = require('../src/Hello.es6');

describe('Hello', () => {

  it('should work', () => {
    var hello = <Hello />;
    //TestUtils.renderIntoDocument(hello);
    //expect(hello).toBeTruthy();
     assert.isOk(hello);
  });

});
