<?php 
  $css = array("img.slide.css", "../basic.css");
  $title = "EmpLog Slides";
  require_once("../rfront.php"); ?>

  <table align="center">
  <tr>
    <td colspan="3" align="center">
    	<img class="slide" src="" id="display" alt="slide" />
      <video class="slide" id="displayVideo" controls>
          <source src="EmpLogPictures/emplog.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video>
    </td>
  </tr>
  <tr>
    <td colspan="3" align="center"><figcaption id="caption"></figcaption></td>
  </tr>
  <tr>
    <td align="right"><img id="back_btn" class="arrows" title="backward" src="" onclick="prevSlide()" alt="previous slide" /></td>
    <td id="tiles"><script>setTiles()</script></td>
    <td align="left"><img id="forward_btn" class="arrows" src="" title="forward" onclick="nextSlide()" alt="next slide" /></td>
  </tr>
  <tr>
    <td colspan="3" align="center"><div id="tooltip-container"></div></td>
  </tr>
  </table>
  <p style="margin-left:27%">
      *Hint1: The arrows move the tiles, they do not change the selected image.<br>
      *Hint2: There is a video at the end of the slideshow.
  </p>

  <script type="text/javascript" src="img.slide.js"></script>

<?php require_once("../rback.php"); ?>
