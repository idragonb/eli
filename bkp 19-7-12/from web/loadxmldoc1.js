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

function nestedElement(basenode,index)
{
  var j = 0;
  var i=0;
  var ret;
  for (i=0;i<basenode.childNodes.length;i++)
 {
   if (basenode.childNodes[i].nodeType == 1)
   {
     if (j == index)
	 {
	   ret = basenode.childNodes[i];
	  // document.write("test" + "<br/>");
	   j++;
	 }
  //   document.write(basenode.childNodes[i].nodeName + "<br/>");
  //   document.write(basenode.childNodes[i].nodeType + "<br/>");

   }
 }
  return ret;   
}

function listSubLabels(basenode)
{
 var i=0;
 var ret=0;
 

  for (i=0;i<basenode.childNodes.length;i++)
   {
	  if(basenode.childNodes[i].nodeName == "node")
	  {
	  ret++;
	 // document.write("<input type='radio' name='sublist' id='"+ret+"'/>"+ basenode.childNodes[i].childNodes[1].childNodes[0].nodeValue + "<br/>"); // value of first child of label
	  document.write("<input type='button' id='"+ basenode.childNodes[i].getAttribute("id") +"' value='"+ basenode.childNodes[i].childNodes[1].childNodes[0].nodeValue + "' onclick='drillDown( &quot;"+ basenode.childNodes[i].getAttribute('id') +"&quot;)'><br/>"); // value of first child of label
	  }
	
	}
	return ret;
}

function getSubNode(basenode,index)
{
 var i=0;
 var j=0;
 var ret;
 

  for (i=0;i<basenode.childNodes.length;i++)
   {
	  if(basenode.childNodes[i].nodeName == "node")
	  {
	  if(j==index)
	  {
	   ret = basenode.childNodes[i];
	  }
	  j++;
	 // document.write("in gsn"+ "<br/>");
	  
	  }
	
	}
	return ret;
}

function drillDown(newBase)
{
alert(newBase);
var xmlDoc=loadXMLDoc("test.xml");
var x=xmlDoc.documentElement;
allnodes=x.getElementsByTagName("node");
for(i=0;i<allnodes.length;i++){ss=allnodes[i].getAttribute("id");if(ss == newBase){zz=allnodes[i];}}
var toptext = zz.childNodes[1].childNodes[0].nodeValue;
alert(toptext);
oo=document.getElementsByTagName("Form")[0].childNodes[1];
oo.nodeValue = toptext;
 switchSubLabels(newBase);
}


function switchSubLabels(basenode)
{
 var i=0;
 var ret=0;
 

  for (i=0;i<basenode.childNodes.length;i++)
   {
	  if(basenode.childNodes[i].nodeName == "node")
	  {
	  ret++;
	  document.write("<input type='button' id='"+ basenode.childNodes[i].getAttribute("id") +"' value='"+ basenode.childNodes[i].childNodes[1].childNodes[0].nodeValue + "' onclick='drillDown( &quot;"+ basenode.childNodes[i].getAttribute('id') +"&quot;)'><br/>"); // value of first child of label
	  oo=document.getElementsByTagName("Form")[0].childNodes[i+3];
	  oo.getAttributeNode("id").nodeValue=basenode.childNodes[i].getAttribute("id");
	  oo.getAttributeNode("value").nodeValue=basenode.childNodes[i].childNodes[1].childNodes[0].nodeValue;
	  oo.getAttributeNode("onclick").nodeValue="' onclick='drillDown( &quot;"+ basenode.childNodes[i].getAttribute('id') +"&quot;)'><br/>";
	  }
	
	}
	return ret;
}
