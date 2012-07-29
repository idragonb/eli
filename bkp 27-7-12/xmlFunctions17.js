function loadXMLDoc()
dname="content12.xml";
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
	
	
	xmlDoc=loadXMLDoc("content12.xml");

	//x=xmlDoc.documentElement;
	x=xmlDoc.getElementsByTagName('index')[0];
	
	putcontent(xmlDoc, "main", lang, "title", "index");
	putcontent(xmlDoc, "softwaretitle", lang, "softwaretitle", "index");
	putcontent(xmlDoc, "software", lang, "softwarecontent", "index");
	putcontent(xmlDoc, "hardwaretitle", lang, "hardwaretitle", "index");
	
	putimage(xmlDoc,"longimage",lang,"longimage","index");
	
	putcontent(xmlDoc, "aboutcontent", lang, "about", "about");

	

}
function putcontent(xmlDoc, xmltag, lang, htmlid, page)
{
	x=xmlDoc.getElementsByTagName(page)[0];
	y=x.getElementsByTagName(xmltag)[0];
    z=y.getElementsByTagName(lang)[0];
	if(document.getElementById(htmlid))
	{
		document.getElementById(htmlid).innerHTML=z.childNodes[0].nodeValue;
	}
}
function putimage(xmlDoc, xmltag, lang, htmlid, page)
{
	x=xmlDoc.getElementsByTagName(page)[0];
	y=x.getElementsByTagName(xmltag)[0];
    z=y.getElementsByTagName(lang)[0];
	if(document.getElementById(htmlid))
	{
		document.getElementById(htmlid).src=z.childNodes[0].nodeValue;
	}
}