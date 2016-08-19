#!/usr/bin/env node

/**
 * Define Insertion Sort constructor
 */
function IS() {}

/**
 * Implement insertion sort algorithm
 */
IS.prototype.insertionSort = function (arr) {
    var j, tmp;
    var len = arr.length;

    for (var i = 1; i < len; ++i) {
        j = i - 1;
        tmp = arr[i];
        while (j >= 0 && arr[j] > tmp) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = tmp;
    }

    return arr;
};

module.exports = IS;
