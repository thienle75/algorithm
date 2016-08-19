#!/usr/bin/env node

/**
 * Define LCS (longest common subsequence) constructor
 */
var LCS = function () {
    this.DP = [];
};

/**
 * commonSubsequence function uses to calculate the
 * DP array before print out the common subsequence
 */
LCS.prototype.commonSubsequence = function (s, t) {
    var sLen = s.length + 1;
    var tLen = t.length + 1;

    // Initialize 2D array
    for (var i = 0; i < sLen; ++i) {
        this.DP[i] = [];
    }

    // Compute value for DP array
    for (var i = 0; i < sLen; ++i) {
        for (var j = 0; j < tLen; ++j) {
            if (i === 0 || j === 0) {
                this.DP[i][j] = 0;
            } else if (s[i] === t[j]) {
                this.DP[i][j] = this.DP[i - 1][j - 1] + 1;
            } else {
                this.DP[i][j] = Math.max(this.DP[i][j - 1], this.DP[i - 1][j]);
            }
        }
    }

    return this.DP[sLen - 1][tLen - 1];
};

/**
 * backTracking function uses to walk through DP array
 * to find a posible common subsequence.
 *
 * NOTE: There may have different subsequences but this
 * function print only one.
 */
LCS.prototype.backTracking = function (s, t) {
    var sLen = s.length;
    var tLen = t.length;
    var commonString = '';
    var commonStringArr = [];
    var len = this.commonSubsequence(s, t);

    while (sLen > 0 && tLen > 0) {
        if (s[sLen - 1] == t[tLen - 1]) {
            commonStringArr[commonStringArr.length] = s[sLen - 1];
            --sLen;
            --tLen;
        } else {
            if (this.DP[sLen - 1][tLen] >= this.DP[sLen][tLen - 1]) {
                --sLen;
            } else {
                --tLen;
            }
        }
    }

    if (commonStringArr.length) {
        commonStringArr.reverse();
        commonString = commonStringArr.reduce(function (prevVal, currVal) {
            return prevVal + '' + currVal;
        });
    }

    return commonString;
};

module.exports = LCS;
