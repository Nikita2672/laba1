function cleanInput() {
    $('#x' + FIELD_X.val()).removeClass('selected');
    FIELD_X.val("");
    FIELD_Y.removeClass('error');
    FIELD_R.removeClass('error');
}