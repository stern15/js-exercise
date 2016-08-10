var c = {greeting:"hi"};
var d;

d = c;
c.greeting = "hello"; //mutation

console.log(c);
console.log(d);

function changeGreetings(obj){
    obj.greeting = "holla";
}
changeGreetings(d);

console.log(c);
console.log(d);

c.greeting = "bite";

console.log(c);
console.log(d);

c = {greeting:"salama"};

console.log(c);
console.log(d);

d = c;

console.log(c);
console.log(d);
