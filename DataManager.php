<?php

class DataManager
{
    public static function insertData()
    {
        date_default_timezone_set('Europe/Moscow');
        if (isset($_GET['x']) && isset($_GET['y']) && isset($_GET['r'])) {
            $startTime = new DateTimeImmutable();
            $validator = new Validator();
            if ($validator->validate($_GET['y'], $_GET['r'])) {
                $x = intval($_GET['x']);
                $y = floatval($_GET['y']);
                $r = floatval($_GET['r']);
                $checkedHit = Checker::checkHit($x, $y, $r) ? "True" : "False";
                $currentTime = date('d.m.y H:i:s');
                $finishTime = new DateTimeImmutable();
                $interval = $startTime->diff($finishTime);
                $processTime = $interval->format('%S.%F');
                exit("
    <tr>
        <td>$x</td>
        <td>$y</td>
        <td>$r</td>
        <td>$currentTime</td>
        <td>$processTime</td>
        <td>$checkedHit</td>
    </tr>");
            } else {
                exit("Data is incorrect\n");
            }
        }
    }
}