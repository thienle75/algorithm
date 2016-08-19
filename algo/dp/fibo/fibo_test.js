#!/usr/bin/env node

var chai = require('chai');
var expect = chai.expect;
var Fibonacci = require('./fibo');

describe('Dynamic programming - Fibonacci test', function () {
    it('0th Fibonacci number (= 0)', function () {
        var fibonacci = new Fibonacci();
        expect(fibonacci.genFibonacci(0)).to.equal(0);
    });

    it('1th Fibonacci number (= 1)', function () {
        var fibonacci = new Fibonacci();
        expect(fibonacci.genFibonacci(1)).to.equal(1);
    });

    it('2th Fibonacci number (= 1)', function () {
        var fibonacci = new Fibonacci();
        expect(fibonacci.genFibonacci(1)).to.equal(1);
    });

    it('3th Fibonacci number (= 2)', function () {
        var fibonacci = new Fibonacci();
        expect(fibonacci.genFibonacci(3)).to.equal(2);
    });

    it('13th Fibonacci number (= 233)', function () {
        var fibonacci = new Fibonacci();
        expect(fibonacci.genFibonacci(13)).to.equal(233);
    });

    it('47th Fibonacci number (= 2971215073)', function () {
        var fibonacci = new Fibonacci();
        expect(fibonacci.genFibonacci(47)).to.equal(2971215073);
    });
});
