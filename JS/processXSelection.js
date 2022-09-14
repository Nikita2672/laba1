function processXSelection(x) {
    if (FIELD_X.val() === x) {
        FIELD_X.val("");
        $('#x' + x).removeClass('selected');
    } else {
        if (FIELD_X.val() !== "") {
            $('#x' + FIELD_X.val()).removeClass('selected');
        }
        FIELD_X.val(x);
        $('#x' + x).addClass('selected');
    }
}
