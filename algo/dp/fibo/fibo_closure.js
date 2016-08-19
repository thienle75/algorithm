#!/usr/bin/env node

/**
 * Define FibonacciClosure constructor
 */
var FibonacciClosure = function () {};

/**
 * Define a public method genFibonacci
 *
 * Compute a(n) nth Fibonacci number using
 * dynamic programming (recursion)
 */
FibonacciClosure.prototype.genFibonacci = function () {
    var memo = [0, 1];

    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };

    return fib;
}();

module.exports = FibonacciClosure;
