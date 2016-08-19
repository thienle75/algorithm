#!/usr/bin/env node

var chai = require('chai');
var expect = chai.expect;
var IIP = require('./iip.js');

describe('Ad hoc - Is It Possible Test', function () {

    describe('isItPossible Function', function () {
        it('Test #0', function () {
            var iip = new IIP();
            expect(iip.isItPossible(1, 4, 1, 4)).equal('Yes');
        });

        it('Test #1', function () {
            var iip = new IIP();
            expect(iip.isItPossible(6, 4, 5, 14)).equal('No');
        });

        it('Test #2', function () {
            var iip = new IIP();
            expect(iip.isItPossible(2, 7, 6, 14)).equal('No');
        });

        it('Test #3', function () {
            var iip = new IIP();
            expect(iip.isItPossible(2, 7, 9, 9)).equal('No');
        });

        it('Test #4', function () {
            var iip = new IIP();
            expect(iip.isItPossible(5, 7, 41, 113)).equal('No');
        });

        it('Test #5', function () {
            var iip = new IIP();
            expect(iip.isItPossible(5, 7, 41, 41)).equal('No');
        });
    });

});
