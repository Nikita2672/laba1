function receiveSubmit() {

    let x_value = $('#x_value').val();
    let y_value = $('#y_value').val();
    let r_value = $('#r_value').val();

    if (validate_inputed_values(y_value, r_value)) {
        $(document).ready(function () {
            $('#table_id').DataTable();
        });
        $.ajax({
            type: "GET",
            url: "index.php",
            async: false,
            data: {"x": x_value.trim(), "y": y_value.trim(), "r": r_value.trim()},
            success: function (data) {
                $('#table_id tbody').after(data);
            },
            error: function (data) {
                alert(data);
            }
        });
    }
}