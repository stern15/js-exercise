var newHeading = document.createElement("h1");
var newPara = document.createElement("p");


var h1Text = document.createTextNode("new beginning");
var pText = document.createTextNode("this is the next thing to do at the get and also we dont want");


newHeading.appendChild(h1Text);
newHeading.appendChild(pText);


document.getElementById("trivia").appendChild(newHeading);
document.getElementById("trivia").appendChild(newPara);
