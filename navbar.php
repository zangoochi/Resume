<nav class="leftnavbar">

<span id="label" style="color:yellow;">Personal:</span>

<?php if($page == "about.php") {?>
<span class="self">About Me</span>
<?php } else {?>
<a id="link" href="/Resume/about.php">About Me</a><?php }?>

<?php if($page == "resume.php") {?>
<span class="self">Resume</span>
<?php } else {?>
<a id="link" href="/Resume/resume.php">Resume</a><?php }?>

<br>

<span id="label" style="color:yellow;">Projects:</span>

<?php if($page == "img.slide.php") {?>
<span class="self">EmpLog</span>
<?php } else {?>
<a id="link" href="/Resume/SlideShow/img.slide.php">EmpLog</a><?php }?>

<?php if($page == "myprofile.php") { ?>
<span class="self">MyProfile</span>
<?php } else {?>
<a id="link" href="myprofile.php">MyProfile</a><?php }?>

</nav>

