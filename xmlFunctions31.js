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
	
	putlanguage(lang);


}
function putlanguage(lang)
{
	xmlDoc=loadXMLDoc("content21.xml");

	//x=xmlDoc.documentElement;
	x=xmlDoc.getElementsByTagName('index')[0];
	
	putcontent(xmlDoc, "main", lang, "title", "index");
	putcontent(xmlDoc, "softwaretitle", lang, "softwaretitle", "index");
	puthtml(xmlDoc, "software", lang, "softwarecontent", "index");
	puthtml(xmlDoc, "hardware", lang, "hardwarecontent", "index");
	//putcontent(xmlDoc, "software", lang, "softwarecontent", "index");
	//putcontent(xmlDoc, "hardwaretitle", lang, "hardwaretitle", "index");
	
	putimage(xmlDoc,"longimage",lang,"longimage","index");
	
	putcontent(xmlDoc, "aboutcontent", lang, "about", "about");
	
	puthtml(xmlDoc, "aboutcontent", lang, "aboutcontent", "about");
	puthtml(xmlDoc, "servicescontent", lang, "servicescontent", "services");
}
function puthtml (xmlDoc, xmltag, lang, htmlid, page)
{
    x=xmlDoc.getElementsByTagName(page)[0];
	y=x.getElementsByTagName(xmltag)[0];
	z=y.getElementsByTagName(lang)[0];
	if(document.getElementById(htmlid))
	{
		document.getElementById(htmlid).src=z.childNodes[0].nodeValue;
	}
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