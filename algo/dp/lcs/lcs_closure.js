#!/usr/bin/env node

/**
 * Define LCSClosure (longest common subsequence) constructor
 */
var LCSClosure = function () {};

/**
 * commonSubsequence function uses to find the longest common
 * subsequence from two input string s, and t.
 *
 * NOTE: This Implement using closure approach so that DP array
 * is not available to user.
 */
LCSClosure.prototype.commonSubsequence = function () {

    // Using DP (2D array) to memorize result
    var DP = [];

    // Implement find common subsequence using loop
    var commonSequence = function (s, t) {
        var sLen = s.length;
        var tLen = t.length;

        // Initialize DP (2D array)
        for (var i = 0; i <= sLen; ++i) {
            DP[i] = [];
        }

        // Compute value for DP array
        for (var i = 0; i <= sLen; ++i) {
            for (var j = 0; j <= tLen; ++j) {
                if (i === 0 || j === 0) {
                    DP[i][j] = 0;
                } else if (s[i] === t[j]) {
                    DP[i][j] = DP[i - 1][j - 1] + 1;
                } else {
                    DP[i][j] = Math.max(DP[i][j - 1], DP[i - 1][j]);
                }
            }
        }

        // Back tracking to find the common subsequence
        var backTracking = function () {
            var commonString = '';
            var commonStringArr = [];

            while (sLen > 0 && tLen > 0) {
                if (s[sLen - 1] == t[tLen - 1]) {
                    commonStringArr[commonStringArr.length] = s[sLen - 1];
                    --sLen;
                    --tLen;
                } else {
                    if (DP[sLen - 1][tLen] >= DP[sLen][tLen - 1]) {
                        --sLen;
                    } else {
                        --tLen;
                    }
                }
            }

            // We need to revrese the commonStringArr in order to get
            // correct common string.
            //
            // NOTE: Maybe there is a better approach
            if (commonStringArr.length) {

                // Using reverse function of JavaScript
                commonStringArr.reverse();
                commonString = commonStringArr.reduce(
                    function (prevVal, currVal) {
                        return prevVal + '' + currVal;
                    });
            }

            // Return the common string
            return commonString;
        }();

        return backTracking;
    };

    return commonSequence;
}();

module.exports = LCSClosure;
