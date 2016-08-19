#!/usr/bin/env node

/**
 * Define Merge Sort constructor
 */
function MS() {}

/**
 * Implement bubble sort algorithm
 */
MS.prototype.mergeSort = function (arr) {

    var sort = function (leftArr, rightArr, mergeArr) {
        var l = 0,
            r = 0,
            m = 0,
            leftLen = leftArr.length,
            rightLen = rightArr.length;

        while (l < leftLen && r < rightLen) {
            // Sort elements from two arrays
            if (leftArr[l] <= rightArr[r]) {
                mergeArr[m++] = leftArr[l++];
            } else {
                mergeArr[m++] = rightArr[r++];
            }
        }

        while (l < leftLen) {
            // Sort remaining elements (the left array)
            mergeArr[m++] = leftArr[l++];
        }

        while (r < rightLen) {
            // Sort remaining elements (the right array)
            mergeArr[m++] = rightArr[r++];
        }
    };

    var merge = function (arr) {
        var len = arr.length;

        if (len < 2) {
            // Base case
            return;
        }

        // Divide `arr` into left and right arrays
        var leftArr = [],
            rightArr = [],
            halfSize = Math.floor(len / 2);

        for (var l = 0; l < halfSize; ++l) {
            leftArr[l] = arr[l];
        }
        for (var r = halfSize; r < len; ++r) {
            rightArr[r - halfSize] = arr[r];
        }

        // Recursion
        merge(leftArr);
        merge(rightArr);
        sort(leftArr, rightArr, arr);
    };

    merge(arr);
    return arr;
};

module.exports = MS;
