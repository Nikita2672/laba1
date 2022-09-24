<?php
class Validator {
    private const Y_MIN = -3;
    private const Y_MAX = 5;
    private const R_MIN = 2;
    private const R_MAX = 5;

    public function validate($y, $r) {
        if (!is_numeric($y) || !is_numeric($r)) {
            return false;
        } else {
            $y_num = floatval($y);
            $r_num = floatval($r);

            if (!($y_num >= self::Y_MIN && $y_num <= self::Y_MAX)) {
                return false;
            }

            if (!($r_num >= self::R_MIN && $r_num <= self::R_MAX)) {
                return false;
            }

            return true;
        }
    }
}