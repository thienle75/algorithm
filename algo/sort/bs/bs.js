#!/usr/bin/env node

/**
 * Define Bubble Sort constructor
 */
function BS() {}

/**
 * Implement bubble sort algorithm
 */
BS.prototype.bubbleSort = function (arr) {
    var tmp, swapped;
    var len = arr.length;

    for (var i = 0; i < len; ++i) {
        swapped = false;
        for (var j = 0; j < len; ++j) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return arr;
};

module.exports = BS;
