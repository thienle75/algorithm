#!/usr/bin/env node

var chai = require('chai');
var expect = chai.expect;
var HLE = require('./hle.js');

describe('Ad hoc - HackLand Election Test', function () {

    describe('electionWinner Function', function () {
        it('Test #0', function () {
            var hle = new HLE();
            var names = ['LE', 'EL', 'ME'];
            expect(hle.electionWinner(names)).equal('ME');
        });

        it('Test #1', function () {
            var hle = new HLE();
            var names = ['LE', 'LE', 'ME'];
            expect(hle.electionWinner(names)).equal('LE');
        });

        it('Test #2', function () {
            var hle = new HLE();
            var names = ['LE', 'LEE', 'LEEE'];
            expect(hle.electionWinner(names)).equal('LEEE');
        });
    });

});
