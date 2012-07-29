function loadXMLDoc(dname)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",dname,false);
xhttp.send();
return xhttp.responseXML;
}

function toggleLanguage()
{
if (lang == "hebrew")
	{
		lang = "english";
		document.getElementById("languageButton").value="עברית";
	}
else
	{
		lang = "hebrew";
		document.getElementById("languageButton").value="english";
	}
	//document.getElementById("languageButton").value=lang;
	
	
	xmlDoc=loadXMLDoc("content10.xml");

	//x=xmlDoc.documentElement;
	x=xmlDoc.getElementsByTagName('index')[0];
	
	y=x.getElementsByTagName('main')[0];
    z=y.getElementsByTagName(lang)[0];
	document.getElementById("title").innerHTML=z.childNodes[0].nodeValue;
	
	y=x.getElementsByTagName('longimage')[0];
    z=y.getElementsByTagName(lang)[0];
	document.getElementById("longimage").src=z.childNodes[0].nodeValue;
	
	y=x.getElementsByTagName('softwaretitle')[0];
    z=y.getElementsByTagName(lang)[0];
	document.getElementById("softwaretitle").innerHTML=z.childNodes[0].nodeValue;
	
	y=x.getElementsByTagName('software')[0];
    z=y.getElementsByTagName(lang)[0];
	document.getElementById("softwarecontent").innerHTML=z.childNodes[0].nodeValue;
	
	y=x.getElementsByTagName('hardwaretitle')[0];
    z=y.getElementsByTagName(lang)[0];
	document.getElementById("hardwaretitle").innerHTML=z.childNodes[0].nodeValue;
	

}
function putcontent(xmlDoc, xmltag, lang, htmlid, page)
{
	x=xmlDoc.getElementsByTagName(page)[0];
	y=x.getElementsByTagName(xmltag)[0];
    z=y.getElementsByTagName(lang)[0];
	document.getElementById(htmlid).innerHTML=z.childNodes[0].nodeValue;
}