#!/usr/bin/env node

/**
 * Define Fibonacci constructor
 */
var Fibonacci = function () {};

/**
 * Define a public method genFibonacci
 *
 * Compute a(n) nth Fibonacci number using
 * dynamic programming (loop)
 */
Fibonacci.prototype.genFibonacci = function (num) {
    var fibo = [0, 1, 1];

    for (var i = 3; i <= num; ++i) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[num];
};

module.exports = Fibonacci;
