/* global describe, it */
/* jshint expr: true*/
'use strict';
var expect = require('chai').expect;

describe('Mocha', function () {
  it('should assert true', function () {
    expect(true).to.be.true;
    expect(false).to.be.false;
  });
});
