<nav class="leftnavbar">
<?php if($page == "about.php") {?>
<span class="self">About Me</span>
<?php } else {?>
<a href="about.php">About Us</a><?php }?>
<br>

<span style="color:yellow;">Projects:</span>

<?php if($page == "SlideShow/img.slide.php") {?>
<span class="self">EmpLog</span>
<?php } else {?>
<a href="SlideShow/img.slide.php">EmpLog</a><?php }?>

<?php if($page == "myprofile.php") { ?>
<span class="self">MyProfile</span>
<?php } else {?>
<a href="myprofile.php">MyProfile</a><?php }?>


</nav>

