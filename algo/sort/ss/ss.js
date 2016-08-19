#!/usr/bin/env node

/**
 * Define Selection Sort constructor
 */
function SS() {}

/**
 * Implement selection sort algorithm
 */
SS.prototype.selectionSort = function (arr) {
    var min, tmp;
    var len = arr.length;

    for (var i = 0; i < len - 1; ++i) {
        min = i;
        for (var j = i + 1; j < len; ++j) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min != i) {
            tmp = arr[min];
            arr[min] = arr[i];
            arr[i] = tmp;
        }
    }

    return arr;
};

module.exports = SS;
