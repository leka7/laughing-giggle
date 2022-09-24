<?php header('Content-type: text/html; charset=utf-8'); ?>
<!DOCTYPE html>
<html>
<head>
  <title>Страница</title>
  <meta charset="utf-8">
</head>
<body>
  <p>Авторизация:</p>
  <form action="authorization.php" method="post">
    <input name="login" placeholder="Логин">
    <input type="password" name="password" placeholder="Пароль">
    <input type="submit" value="Войти">
  </form>
  <p>Регистрация:</p>
  <form action="registration.php" method="post">
    <input name="login" placeholder="Логин">
    <input type="password" name="password" placeholder="Пароль">
    <input type="submit" value="Зарегистрароваться">
  </form>
</body>
</html>