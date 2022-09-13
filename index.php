<?php
include 'validator.php';

date_default_timezone_set('Europe/Moscow');

function check_hit($x, $y, $r): bool
{
    $isHit = false;
    if ($x >= 0 && $y >= 0) {
        if ($y <= (-2 * $x + $r)) $isHit = true;
    } else if ($x < 0 && $y > 0) {
        if (!(($x * $x + $y * $y) > ($r * $r / 4))) $isHit = true;
    } else if ($x < 0 && $y <= 0) {
        if ($x > -$r && $y > -$r / 2) $isHit = true;
    }
    return $isHit;
}

if (isset($_GET['x']) && isset($_GET['y']) && isset($_GET['r'])) {
    $startTime = new DateTimeImmutable();
    $validator = new Validator;
    if ($validator->validate($_GET['y'], $_GET['r'])) {
        $x = intval($_GET['x']);
        $y = floatval($_GET['y']);
        $r = floatval($_GET['r']);
        $checkedHit = check_hit($x, $y, $r) ? "True" : "False";
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