function b(){
    var myVar;
    console.log(myVar);

}
function a(){
    var myVar = 2;
    b();
    console.log(myVar);

}
var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
