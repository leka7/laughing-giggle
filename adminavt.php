<?php
header('Content-type: text/html; charset=utf-8');
$login = $_POST['login'];
$pas = $_POST['password'];
if ($login == 'admin' && $pas == admin)
{
  session_start();
  $_SESSION['admin'] = true;
  $script = 'adminpanel.html';
}
else
  $script = 'index.html';
header("Location: $script");
?>