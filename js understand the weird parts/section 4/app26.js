var person = {
    firstName:"semasuka",
    lastName:"stern",
    getFullName:function(){
        var fullname= this.firstName + " " + this.lastName;
        return fullname;
    }
};

var logName = function (lang1,lang2){
    console.log("logged: "+ this.getFullName());
    console.log("arguments: "+ lang1 +" "+ lang2);
    console.log("-------------------");
};

var logPersonName = logName.bind(person);
logPersonName("en");


logName.call(person,"es");
logName.apply(person,["en","es"]);

(function (lang1,lang2){
    console.log("logged: "+ this.getFullName());
    console.log("arguments: "+ lang1 +" "+ lang2);
    console.log("-------------------");
}.apply(person,["en","it"]));


//function borrowing

var person2={
    firstName:"Yvette",
    lastName:"Sinarinzi"
};
console.log(person.getFullName.apply(person2));


//function curring

function multiply(a,b){
    return a*b;
}
var multiplyByTwo = multiply.bind(this,2);
console.log(multiplyByTwo(5));


var multiplyByThree = multiply.bind(this,3);
console.log(multiplyByThree(9));







