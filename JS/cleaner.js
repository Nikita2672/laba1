function cleanInput() {
    const field_x = $('#x_value');
    $('#x' + field_x.val()).removeClass('selected');
    field_x.val("");
    const field_y = $('#y_value');
    field_y.removeClass('error');
    const field_r = $('#r_value');
    field_r.removeClass('error');
}