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

<!DOCTYPE html>

<!-- define angular app -->
<html ng-app="scotchApp">

<head>
  <!-- SCROLLS -->
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />

  <!-- SPELLS -->
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
  <script src="script.js"></script>
  <script src="controller.js"></script>

  <!-- STÖÐVAR -->
  <script src="services/ruv.js"></script>
  <script src="services/stod2.js"></script>
  <script src="services/skjar1.js"></script>
  <script src="services/stod2sport.js"></script>

</head>

<!-- define angular controller -->
<body ng-controller="mainController">

  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Islensk Sjonvarpsdagskra</a>
      </div>

      <ul class="nav navbar-nav navbar-left">
        <li><a href="#ruv"><i class="fa fa-circle"></i> Ruv</a></li>
        <li><a href="#stod2"><i class="fa fa-circle"></i> Stod 2</a></li>
        <li><a href="#skjar1"><i class="fa fa-circle"></i> Skjar 1</a></li>
        <li><a href="#stod2sport"><i class="fa fa-circle"></i> Stod 2 Sport</a></li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
        <li><a href="#about"><i class="fa fa-shield"></i> About</a></li>
        <li><a href="#contact"><i class="fa fa-comment"></i> Contact</a></li>
        <li><a href="#user"><i class="fa fa-male"></i> <?php echo $userRow['username']; ?></a></li>
        <li><a href="logout.php?logout"><i class="fa fa-circle"></i> Sign Out</a></li>
      </ul>
    </div>
  </nav>

  <div id="main">

    <!-- angular templating -->
        <!-- this is where content will be injected -->
    <div ng-view></div>

  </div>

  <footer class="text-center">

  </footer>


</body>

</html>
