<?php
include 'Validator.php';
include 'Checker.php';
include 'DataManager.php';

$startTime = new DateTimeImmutable();
$answer = "";
if (DataManager::checkIfDataSet()) {
    $x = $_GET['x'];
    $y = $_GET['y'];
    $r = $_GET['r'];
    if (DataManager::checkIfDataValid($x, $y, $r)) {
        $answer = (DataManager::prepareValidAnswer($x, $y, $r, $startTime));
    } else {
        $answer = (DataManager::prepareIncorrectDataAnswer($x, $y, $r, $startTime));
    }
} else {
    $answer = (DataManager::prepareEmptyDataAnswer($startTime));
}
DataManager::insertAnswer($answer);
