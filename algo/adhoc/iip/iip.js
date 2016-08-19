#!/usr/bin/env node

/**
 * Define IIP (Is It Possible) constructor
 */
var IIP = function () {};

/**
 * Implement is it possible algorithm
 */
IIP.prototype.isItPossible = function (a, b, c, d) {
    var chain = [];
    chain.push({
        'x': a,
        'y': b
    });

    while (chain.length != 0) {
        var first = chain.shift();

        if (first['x'] === c && first['y'] === d) {
            return 'Yes';
        }

        var sum = first['x'] + first['y'];
        if (sum < c) {
            chain.push({
                'x': sum,
                'y': first['y']
            });
        }
        if (sum < d) {
            chain.push({
                'x': first['x'],
                'y': sum
            });
        }
    }

    return 'No';
};

module.exports = IIP;
