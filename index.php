
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<?php include("htmlhead.php"); ?>
<body>

<br />

<div id="container" class="centered">
<?php include("menu.php"); ?>
  <div id="headspace">
     <img id="longimage" src="images/longlogo.gif" alt="------" />
  <!-- this can be used to run a graphic across the screen ------------------------------->
  </div>
  <div id="intro">
  This area will have an animation
  </div>
  <div id="space">
  </div>
  <div id="disciplines">
   <div class="expert" id="software">
		<p id="softwaretitle" class="experttitle">
		--
		</p>
		<div class="expertcontent">
		<p id="softwarecontent" class="expertcontent">
		--
		</p>
		</div>
   </div>
   <div class="expert" id="hardware">
   		<p id="hardwaretitle" class="experttitle">
		--
		</p>
		<p id="hardwarecontent" class="expertcontent">
		--
		</p>
   </div>
   <div class="expert" id="mechanical">
      	<p id="mechanicaltitle" class="experttitle">
		--
		</p>
		<p id="mechanicalcontent" class="expertcontent">
		--
		</p>
   </div>
   <div class="expert" id="outsourcing">
         <p id="outsourcingtitle" class="experttitle">
		--
		</p>
		<p id="outsourcingcontent" class="expertcontent">
		--
		</p>
   </div>
  </div>
  <div id="footspace">
  </div>
  <div id="footer">
  this is the footer area
  </div>
</div>

<script type="text/javascript"> // Places title upon load in paragraph with id "title"
    lang = document.getElementById("languageButton").value;
	document.getElementById("languageButton").value="עברית";	
	
	putlanguage(lang);

</script>

</body></html>