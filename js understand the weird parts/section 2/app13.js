var playerOne = { name:"stern", age:22, gender:"male", score:1000000 };

var playerTwo = { name:"yvette", age:27, gender:"female", score:50000 };

if ( playerOne.score > playerTwo.score ){
    console.log ( playerOne.name + " has win the game with " + playerOne.score +" points" );
}
else if ( playerOne.score < playerTwo.score ){
    console.log ( playerTwo.name + " has win the game with " + playerOne.score +" points" );
}
else {
    console.log ( "there is a draw" );
}
