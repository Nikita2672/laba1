function receiveSubmit() {

    let x_value = FIELD_X.val();
    let y_value = FIELD_Y.val();
    let r_value = FIELD_R.val();

    if (validate_inputed_values(y_value, r_value)) {
        $.ajax({
            type: "GET",
            url: "index.php",
            async: false,
            data: {"x": x_value.trim(), "y": y_value.trim(), "r": r_value.trim()},
            success: function (data) {
                $('#table_id tbody').after(data);/*
                $('#table_id').find('thead').after(data);*/
            },
            error: function (data) {
                alert(data);
            }
        });
    }
}