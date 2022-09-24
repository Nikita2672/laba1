"use strict";
exports.__esModule = true;
require("Jquery");
var constants_1 = require("./constants");
function cleanInput() {
    $("#x" + $(constants_1.constants.FIELD_X).val()).removeClass('selected');
    $(constants_1.constants.FIELD_X).val("");
    $(constants_1.constants.FIELD_Y).removeClass('error');
    $(constants_1.constants.FIELD_R).removeClass('error');
}
