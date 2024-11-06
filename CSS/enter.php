<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" required name="name">
        <input type="password" required name="password">
        <button value="submit" name="submit"></button>
    </form>
</body>
</html>
<?php 
$user=$_POST['name'];
$_password=$_POST['password'];
echo $user;
echo $password;

?>