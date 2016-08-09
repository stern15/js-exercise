greet();

function greet(){
    console.log("hi");
}

var anonymousGreetings = function (){
    console.log("hi");
};

anonymousGreetings();

function log(a){
    a();
}

log(function(){
    console.log("hi");
});
