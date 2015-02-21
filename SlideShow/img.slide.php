<?php $css = array("img.slide.css", "../basic.css"); require_once("../rfront.php"); ?>

  <table align="center">
  <tr>
    <td colspan="3" align="center">
    	<img class="slide" src="" id="display" alt="slide" />
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


    <script type="text/javascript" src="img.slide.js"></script>

<?php require_once("../rback.php"); ?>
