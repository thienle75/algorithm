#!/usr/bin/env node

/**
 * Define SCS (shortest construct sequence) constructor
 */
var SCS = function () {};

/**
 * Implement shortest construct sequence algorithm
 */
SCS.prototype.shortestContructSequence = function (num) {
    var count = 1;

    while (num !== 1) {
        if (num % 2 !== 0) {
            --num;
            ++count;
        }
        num = num / 2;
        ++count;
    }

    return count;
};

module.exports = SCS;
