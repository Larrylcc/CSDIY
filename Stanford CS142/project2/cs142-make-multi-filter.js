"use strict";
function cs142MakeMultiFilter(originalArray) {
    var currentArray = originalArray;
    var arrayFilterer = function () {
        if (arguments.length === 0) {
            return currentArray;
        }
    };

    return arrayFilterer;
}