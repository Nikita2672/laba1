function validateInputedValues(xVal, yVal, rVal) {
    var isY;
    var isR;
    var isX;
    if (!validateNumber(-3, 5, yVal)) {
        isY = false;
        $(FIELD_Y).addClass('error');
    }
    else {
        isY = true;
        $(FIELD_Y).removeClass('error');
    }
    if (!validateNumber(2, 5, rVal)) {
        isR = false;
        $(FIELD_R).addClass('error');
    }
    else {
        isR = true;
        $(FIELD_R).removeClass('error');
    }
    if (!validateX(-4, 4, xVal)) {
        isX = false;
        $('#mistake').removeClass('mistake');
    }
    else {
        isX = true;
        $('#mistake').addClass('mistake');
    }
    return isX && isY && isR;
}

function validateNumber(left, right, InputElement) {
    if (typeof InputElement === 'string' || typeof InputElement === 'number') {
        var number = parseFloat(InputElement.toString());
        return !(isNaN(number) || number <= left || number >= right);
    } else {
        return false;
    }
}

function validateX(left, right, xInputElement) {
    if (typeof xInputElement === 'string' || typeof xInputElement === 'number') {
        xInputElement = xInputElement.toString();
        var x = parseInt(xInputElement);
        return !(isNaN(x) || x < left || x > right);
    } else {
        return false;
    }
}