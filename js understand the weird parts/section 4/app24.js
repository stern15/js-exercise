function tellWhenDone (callback){
    var a = 1000; //doing some work
    var b = 2000; //doing some work
    callback();
}

tellWhenDone(function(){
    console.log("im done");
});
tellWhenDone(function(){
    console.log("all done...");
});
