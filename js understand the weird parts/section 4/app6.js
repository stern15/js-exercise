greet();

function greet(){
    console.log("hi");
}

var anonymousGreetings = function (){
    console.log("hi");
};

anonymousGreetings();

function log(a){
    console.log(a);
}

log(function(){
    console.log("hi");
});
