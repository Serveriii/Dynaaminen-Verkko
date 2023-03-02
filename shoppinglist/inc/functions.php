<?php
function openDb() {
    $db = new PDO("mysql:host=localhost;dbname=shoppinglist;charset=utf8", "root", "");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}

function returnError(PDOException $error) {
    header("HTTP/1.1 500 Internal Server Error");
    $error = array("error" => $error->getMessage());
    print json_encode($error);
}