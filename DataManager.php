<?php

class DataManager
{
    public static function checkIfDataSet(): bool
    {
        return isset($_GET['x']) && isset($_GET['y']) && isset($_GET['r']);
    }

    public static function checkIfDataValid($x, $y, $r): bool
    {
        return Validator::validate($x, $y, $r);
    }

    public static function prepareValidAnswer($x, $y, $r, $startTime): string
    {
        $x = intval($x);
        $y = floatval($y);
        $r = floatval($r);
        $checkedHit = Checker::checkHit($x, $y, $r) ? "True" : "False";
        $Time = self::prepareTime($startTime);
        $currentTime = $Time[0];
        $processTime = $Time[1];
        return "$x*$y*$r*$currentTime*$processTime*$checkedHit";
    }

    public static function insertAnswer($result): void
    {
        exit($result);
    }

    public static function prepareIncorrectDataAnswer($x, $y, $r, $startTime): string
    {
        $Time = self::prepareTime($startTime);
        $currentTime = $Time[0];
        $processTime = $Time[1];
        $checkedHit = "Data is incorrect";
        return "$x*$y*$r*$currentTime*$processTime*$checkedHit";
    }

    public static function prepareEmptyDataAnswer($startTime): string
    {
        $Time = self::prepareTime($startTime);
        $currentTime = $Time[0];
        $processTime = $Time[1];
        $checkedHit = "There is no data";
        return "empty*empty*empty*$currentTime*$processTime*$checkedHit";
    }

    private static function prepareTime($startTime): array
    {
        date_default_timezone_set('Europe/Moscow');
        $currentTime = date('d.m.y H:i:s');
        $finishTime = new DateTimeImmutable();
        $interval = $startTime->diff($finishTime);
        $processTime = $interval->format('%S.%F');
        return [$currentTime, $processTime];
    }
}
