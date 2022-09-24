"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
function validateInputedValues(yVal, rVal) {
    var isY;
    var isR;
    if (!validateNumber(yVal, -3, 5)) {
        $(constants_1.constants.FIELD_Y).addClass('error');
        isY = false;
    }
    else {
        isY = true;
        $(constants_1.constants.FIELD_Y).removeClass('error');
    }
    if (!validateNumber(rVal, 2, 5)) {
        isR = false;
        $(constants_1.constants.FIELD_R).addClass('error');
    }
    else {
        isR = true;
        $(constants_1.constants.FIELD_R).addClass('error');
    }
    return isY && isR;
}
function validateNumber(yVal, leftInterval, rightInterval) {
    if (typeof (yVal) === "string" || typeof (yVal) === "number") {
        if (typeof (yVal) === "string") {
            var y = parseFloat(yVal);
            return !(y <= leftInterval || y >= rightInterval);
        }
        else {
            var y = yVal;
            return !(y <= leftInterval || y >= rightInterval);
        }
    }
    else {
        return false;
    }
}
