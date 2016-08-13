//function statement
function greet(name){
    console.log("hello "+name);
}
greet("stern");
console.log("-----");

//function expression
var varFunc = function(name){
    return("hello "+name);
}("stern");
console.log(varFunc);







var firstname = "semasuka";
(function(name){
    var greeting = "hello";
    console.log(greeting+" "+name);
}(firstname));
