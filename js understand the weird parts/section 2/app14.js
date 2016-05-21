var playerOne = { name:"stern", age:22, gender:"male", score:1000000 };

var playerTwo = { name:"yvette", age:27, gender:"female", score:50000 };

function playerDetails(){
   console.log( this.name + " with " + this.age + " years old has " +this.score + " points " );
}

playerOne.showDetails = playerDetails;

playerTwo.showDetails = playerDetails;

playerOne.showDetails();
playerTwo.showDetails();


var doc=document.
