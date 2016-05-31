function Player(n,s,r){
    this.name = n;
    this.score = s;
    this.rank = r;

}

Player.prototype.logInfo = function(){
    console.log("I am: " + this.name);
};

Player.prototype.promoted = function(){
    this.rank++;
    console.log("the rank now is: " + this.rank);
};

var fred = new Player("fred",2000,2);

fred.promoted();
fred.logInfo();


var bob = new Player("bob",300,9);

bob.logInfo();
bob.promoted();



