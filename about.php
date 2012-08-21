
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<?php include("htmlhead.php"); ?>
<body>

<br />

<div id="container" class="centered">
<?php include("menu.php"); ?>
    <iframe id="aboutcontent" src="AboutGeneralHebrew.html" width="100%" height="2500" scrolling="auto" frameborder="0">
	</iframe>
	<p id="about">--</p>
</div>

<script type="text/javascript"> // Places title upon load in paragraph with id "title"
    lang = document.getElementById("languageButton").value;
	document.getElementById("languageButton").value="עברית";	
	
	putlanguage(lang);
	

</script>

</body></html>