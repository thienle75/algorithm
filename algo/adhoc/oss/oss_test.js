#!/usr/bin/env node

var chai = require('chai');
var expect = chai.expect;
var OSS = require('./oss.js');

describe('Ad hoc - One Swap Sortable Test', function () {

    describe('oneSwapSortable Function', function () {
        it('Given example (true)', function () {
            var oss = new OSS();
            var arr = [1, 5, 3, 3, 7];
            expect(oss.oneSwapSortable(arr)).equal(true);
        });

        it('Given example (false)', function () {
            var oss = new OSS();
            var arr = [1, 3, 5, 3, 4];
            expect(oss.oneSwapSortable(arr)).equal(false);
        });

        it('Sorted array', function () {
            var oss = new OSS();
            var arr = [1, 2, 3, 5, 7];
            expect(oss.oneSwapSortable(arr)).equal(true);
        });

        it('One element array', function () {
            var oss = new OSS();
            var arr = [1];
            expect(oss.oneSwapSortable(arr)).equal(true);
        });

        it('With negative element array (true)', function () {
            var oss = new OSS();
            var arr = [1, -2, 3, 5, 7];
            expect(oss.oneSwapSortable(arr)).equal(true);
        });

        it('With negative element array (false)', function () {
            var oss = new OSS();
            var arr = [1, -2, 3, -5, 7];
            expect(oss.oneSwapSortable(arr)).equal(false);
        });

        it('Swap rear', function () {
            var oss = new OSS();
            var arr = [1, 2, 7, 5, 3];
            expect(oss.oneSwapSortable(arr)).equal(true);
        });

        it('Swap front', function () {
            var oss = new OSS();
            var arr = [3, 2, 1, 5, 7];
            expect(oss.oneSwapSortable(arr)).equal(true);
        });

        it('Swap front rear', function () {
            var oss = new OSS();
            var arr = [7, 2, 3, 5, -1];
            expect(oss.oneSwapSortable(arr)).equal(true);
        });
    });
});
