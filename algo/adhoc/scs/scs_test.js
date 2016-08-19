#!/usr/bin/env node

var chai = require('chai');
var expect = chai.expect;
var SCS = require('./scs.js');

describe('Ad hoc - Shortest Construct Sequence Test', function () {

    describe('shortestContructSequence Function', function () {
        it('Given example', function () {
            var scs = new SCS();
            expect(scs.shortestContructSequence(18)).equal(6);
        });

        it('Test with 1', function () {
            var scs = new SCS();
            expect(scs.shortestContructSequence(1)).equal(1);
        });

        it('Test with 2', function () {
            var scs = new SCS();
            expect(scs.shortestContructSequence(2)).equal(2);
        });

        it('Test with odd number', function () {
            var scs = new SCS();
            expect(scs.shortestContructSequence(99)).equal(10);
        });

        it('Test with even number', function () {
            var scs = new SCS();
            expect(scs.shortestContructSequence(114)).equal(10);
        });

        it('Test with number power of 2', function () {
            var scs = new SCS();
            expect(scs.shortestContructSequence(1024)).equal(11);
        });
    });

});
