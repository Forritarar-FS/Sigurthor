<?php
session_start();
include_once 'dbconnect.php';

if(!isset($_SESSION['user']))
{
 header("Location: login.php");
}
$res=mysql_query("SELECT * FROM users WHERE user_id=".$_SESSION['user']);
$userRow=mysql_fetch_array($res);
?>

<html >
<div class="jumbotron text-center">
    <h1>Upplysingar um thig</h1>
    <p>Notendanafn: <?php echo $userRow['username']; ?></p>
    <p>Email: <?php echo $userRow['email']; ?></p>
</div>
</html>
