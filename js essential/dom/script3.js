var myNewElement = document.createElement("li");
var myNewText = document.createTextNode("yeah we are the best");
myNewElement.appendChild(myNewText);

var elementNav = document.getElementById("quickNav");

var secondEle = elementNav.getElementsByTagName("li")[2];

elementNav.insertBefore(myNewElement,secondEle);
