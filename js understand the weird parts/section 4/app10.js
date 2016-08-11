function a(){
    var b=2;
    console.log(b);
    function c(){
        console.log(b);
    }
    c();
}
var b=3;
console.log(b);
a();
