
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">
<title>E.M.Tech</title>

<script type="text/javascript" src="xmlFunctions12.js"></script>
<link rel="stylesheet" type="text/css" href="emtech10.css" />
</head>
<body>

<br />

<div id="container">
  <div id="header">
    <div id="logo">
		<p id="title">
			E.M.Tech
		</p>
    </div>
    <div id="bylogo">
      <div id="languages">
      <input type="button" id="languageButton" value="english" onclick="toggleLanguage()">
      </div>
      <div id="menu">
		<?php include("menu.php"); ?>
      </div>
    </div>
  </div>
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
   <div class="expert">
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
	
	
	xmlDoc=loadXMLDoc("content10.xml");
<!--	x=xmlDoc.documentElement;-->
	x=xmlDoc.getElementsByTagName('index')[0];
	
	putcontent(xmlDoc, "main", lang, "title", "index");
	putcontent(xmlDoc, "softwaretitle", lang, "softwaretitle", "index");
	putcontent(xmlDoc, "software", lang, "softwarecontent", "index");
	putcontent(xmlDoc, "hardwaretitle", lang, "hardwaretitle", "index");

	putimage(xmlDoc,"longimage",lang,"longimage","index");
<!--
	y=x.getElementsByTagName('longimage')[0];
    z=y.getElementsByTagName(lang)[0];
	document.getElementById("longimage").src=z.childNodes[0].nodeValue;

//xmlDoc=loadXMLDoc("content.xml");

//x=xmlDoc.documentElement;
//y=xmlDoc.getElementsByTagName('main')[0];
//z=y.getElementsByTagName(lang)[0];


//document.write(x.nodeName + "<br />");
//document.write(y.nodeName + "<br />");
//document.write(z.childNodes[0].nodeValue + "<br />");
-->
</script>

</body></html>