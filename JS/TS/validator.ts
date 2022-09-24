import {constants} from "./constants";

function validateInputedValues(yVal: string | number | string[] | undefined, rVal: string | number | string[] | undefined)
    : boolean {
    let isY: boolean;
    let isR: boolean;

    if (!validateNumber(yVal, -3, 5)) {
        $(constants.FIELD_Y).addClass('error')
        isY = false;
    } else {
        isY = true;
        $(constants.FIELD_Y).removeClass('error');
    }
    if (!validateNumber(rVal, 2, 5)) {
        isR = false;
        $(constants.FIELD_R).addClass('error');
    } else {
        isR = true;
        $(constants.FIELD_R).addClass('error');
    }
    return isY && isR;
}

function validateNumber(yVal: string | number | string[] | undefined, leftInterval: number, rightInterval: number): boolean {
    if (typeof (yVal) === "string" || typeof (yVal) === "number") {
        if (typeof (yVal) === "string") {
            let y: number = parseFloat(yVal);
            return !(y <= leftInterval || y >= rightInterval)
        } else {
            let y: number = yVal;
            return !(y <= leftInterval || y >= rightInterval)
        }
    } else {
        return false;
    }
}