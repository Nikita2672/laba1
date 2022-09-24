import "Jquery";
import {constants} from "./constants";

function cleanInput(): void {
    $("#x" + $(constants.FIELD_X).val()).removeClass('selected');
    $(constants.FIELD_X).val("");
    $(constants.FIELD_Y).removeClass('error');
    $(constants.FIELD_R).removeClass('error');
}