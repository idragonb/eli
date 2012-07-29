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
	}
else
	{
		lang = "hebrew";
	}
	document.getElementById("languageButton").value=lang;
	
	
	xmlDoc=loadXMLDoc("content.xml");

	x=xmlDoc.documentElement;
	y=xmlDoc.getElementsByTagName('main')[0];
    z=y.getElementsByTagName(lang)[0];
	document.getElementById("title").innerHTML=z.childNodes[0].nodeValue;
	

}