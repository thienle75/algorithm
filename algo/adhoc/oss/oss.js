#!/usr/bin/env node

/**
 * Define OSS (One Swap Sortable) constructor
 */
var OSS = function () {};

/**
 * Implement one swap sortable algorithm
 */
OSS.prototype.oneSwapSortable = function (arr) {
    var disPos = -1; // Disorder position
    var minPos = -1; // Minimal position
    var min = undefined;

    // Length one array is obviously one swap sortable
    if (arr.length === 1) {
        return true;
    }

    // Find the disorder position and minimal position
    for (var i = 1; i < arr.length; ++i) {
        if (disPos === -1 && arr[i] < arr[i - 1]) {
            disPos = minPos = i - 1;
            min = arr[disPos];
        }
        if (disPos !== -1 && arr[i] <= min) {
            min = arr[i];
            minPos = i;
        }
    }

    // Couldn't find disorder position means
    // array is already sorted
    if (disPos === -1) {
        return true;
    }

    arr[minPos] = arr[disPos];
    arr[disPos] = min;

    // Check if array is sorted after swap
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }

    return true;
};

module.exports = OSS;
