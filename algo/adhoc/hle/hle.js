#!/usr/bin/env node

/**
 * Define HLE (HackLand Election) constructor
 */
var HLE = function () {};

/**
 * Implement election winner algorithm
 */
HLE.prototype.electionWinner = function (names) {
    var counter = {}; // Define a counter object

    names.forEach(function (elm) {
        // Loop throught the names array and
        // count candidate's votes.
        if (counter[elm] !== undefined) {
            counter[elm] += 1;
        } else {
            counter[elm] = 1;
        }
    });

    var winner = undefined;
    for (var property in counter) {
        if (counter.hasOwnProperty(property)) {
            if (winner === undefined) {
                winner = property;
            } else {
                if (counter[winner] < counter[property]) {
                    winner = property;
                } else if (counter[winner] === counter[property]) {
                    if (winner < property) {
                        winner = property;
                    }
                }
            }
        }
    }

    return winner;
};

module.exports = HLE;
