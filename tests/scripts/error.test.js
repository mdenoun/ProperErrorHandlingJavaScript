﻿var target = require('../../scripts/error');
var should = require('should');

describe('An error', function () {
    it('throwns a TypeError', function () {
        should.throws(target, TypeError);
    });
});
