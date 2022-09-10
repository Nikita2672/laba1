let inputY = document.querySelector('#y_value'),
    inputR = document.querySelector('#r_value');

function validate_inputed_values(yVal, rVal) {
    let isY;
    let isR;
    console.log(yVal, rVal);
    if (!validateY(yVal)) {
        inputY.classList.add('error');
        isY = false;
    } else {
        isY = true
        inputY.classList.remove('error');
    }
    if (!validateR(rVal)) {
        isR = false;
        inputR.classList.add('error');
    } else {
        isR = true
        inputR.classList.remove('error');
    }
    return isY && isR;
}

function validateY(yInputElement) {
    const y = parseFloat(yInputElement);
    return !(Number.isNaN(y) || y <= -3 || y >= 5);
}

function validateR(rInputElement) {
    const r = parseFloat(rInputElement);
    return !(Number.isNaN(r) || r <= 2 || r >= 5);
}
