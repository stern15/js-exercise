(function(global,name){
    var greeting ="Hello";
    global.greeting = "halaaa";
    console.log(greeting+" "+name);
}(window,"john"));
console.log(greeting);
