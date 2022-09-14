function receiveSubmit() {

    let x = FIELD_X.val();
    let y = FIELD_Y.val();
    let r = FIELD_R.val();

    if (validateInputedValues(y, r)) {
        sendRequest(x, y, r);
    }
}

function sendRequest(x, y, r) {
    $.ajax({
        type: "GET",
        url: "index.php",
        async: false,
        data: {"x": x.trim(), "y": y.trim(), "r": r.trim()},
        success: function (data) {
            success(data);
        },
        error: function (data) {
            alert(data);
        }
    });
}

function success(data) {
    $('#table_id tbody').after(data);
    //$('#table_id').find('thead').after(data);*/
}


