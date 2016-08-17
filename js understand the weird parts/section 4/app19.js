function greeting(whatToSay){
    return function(name){
        console.log(whatToSay+" "+name);
    };
}
var greetVar = greeting("hello");
greetVar("stern");

