<?php
header('Content-type: text/html; charset=utf-8');

$login=$_POST['login_name'];
$pas=$_POST['login_password'];
$email=$_POST['login_password'];
$db=mysqli_connect('localhost', 'root', '', 'mybase');
$query="INSERT INTO users (login, pas) VALUES ('$login', '$pas')";
$result=mysqli_query($db, $query);
if ($result)
header("Location: index.html");
mysqli_close($db);