#!/usr/bin/env node

var chai = require('chai');
var expect = chai.expect;
var Ss = require('./ss');

describe('Sort - Selection Sort Test', function () {
    it('Sorted increasing order (positive)', function () {
        var ss = new Ss();
        var arr = [0, 1, 4, 6, 10, 100, 101];
        expect(ss.selectionSort(arr)).to.eql(arr);
    });

    it('Sorted decreasing order (positive)', function () {
        var ss = new Ss();
        var arr = [102, 99, 40, 33, 1, 0];
        expect(ss.selectionSort(arr)).to.eql(arr);
    });

    it('Sorted increasing order (negative)', function () {
        var ss = new Ss();
        var arr = [-102, -99, -40, -33, -5, -1];
        expect(ss.selectionSort(arr)).to.eql(arr);
    });

    it('Sorted decreasing order (negative)', function () {
        var ss = new Ss();
        var arr = [-1, -4, -6, -10, -100, -101];
        expect(ss.selectionSort(arr)).to.eql(arr);
    });

    it('Sorted repeated (positive)', function () {
        var ss = new Ss();
        var arr = [0, 10, 1, 0, 10, 5, 1, 10, 10, 1];
        var sorted = [0, 0, 1, 1, 1, 5, 10, 10, 10, 10];
        expect(ss.selectionSort(arr)).to.eql(sorted);
    });

    it('Sorted repeated (negative)', function () {
        var ss = new Ss();
        var arr = [-4, -10, -1, -4, -10, -5, -1, -10, -10, -1];
        var sort = [-10, -10, -10, -10, -5, -4, -4, -1, -1, -1];
        expect(ss.selectionSort(arr)).to.eql(sort);
    });

    it('Sorted mix', function () {
        var ss = new Ss();
        var arr = [-4, -10, -1, 4, 0, -5, -1, 10, -10, 21];
        var sort = [-10, -10, -5, -4, -1, -1, 0, 4, 10, 21];
        expect(ss.selectionSort(arr)).to.eql(sort);
    });
});
