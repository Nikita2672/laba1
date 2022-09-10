<?php
date_default_timezone_set('Europe/Moscow');
function check_hit($x, $y, $r) {
    $isHit = false;
    if ($x >= 0 && $y >= 0) {
        if ($y <= (-2 * $x + $r)) $isHit = true;
    } else if ($x < 0 && $y > 0) {
        if (!(($x * $x + $y * $y) > ($r * $r / 4))) $isHit = true;
    } else if ($x < 0 && $y <= 0) {
        if ($x > -$r && $y > -$r/2) $isHit = true;
    }
    return $isHit;
}
$x = $_GET['x'];
$y = $_GET['y'];
$r = $_GET['r'];
$startTime = new DateTimeImmutable();
$checkedHit = check_hit($x, $y, $r) ? "True" : "False";
$currentTime = date('d.m.y H:i:s');
$finishTime = new DateTimeImmutable();
$interval = $startTime->diff($finishTime);
$processTime = $interval->format('%S.%F');
echo "$x, $y, $r";
exit("
    <tr>
        <td>$x</td>
        <td>$y</td>
        <td>$r</td>
        <td>$currentTime</td>
        <td>$processTime</td>
        <td>$checkedHit</td>
    </tr>");