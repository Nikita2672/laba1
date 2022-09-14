function validate_inputed_values(yVal, rVal) {
    let isY;
    let isR;
    console.log(yVal, rVal);
    if (!validateY(yVal)) {
        FIELD_Y.addClass('error');
        isY = false;
    } else {
        isY = true
        FIELD_Y.removeClass('error');
    }
    if (!validateR(rVal)) {
        isR = false;
        FIELD_R.addClass('error');
    } else {
        isR = true
        FIELD_R.removeClass('error');
    }
    return isY && isR;
}

function validateY(yInputElement) {
    let y = parseFloat(yInputElement);
    return !(Number.isNaN(y) || y <= -3 || y >= 5);
}

function validateR(rInputElement) {
    let r = parseFloat(rInputElement);
    return !(Number.isNaN(r) || r <= 2 || r >= 5);
}
