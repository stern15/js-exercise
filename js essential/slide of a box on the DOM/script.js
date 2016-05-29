var count = 0;
var intervalHandler;


function initAnimatedBox(){
    document.getElementById("join").style.position = "absolute";
    document.getElementById("join").style.left = "0px";
    document.getElementById("join").style.top = "100px";

    intervalHandler = setInterval(animationBox,50);
}
function animationBox(){
    count += 5;
    document.getElementById("join").style.left = count + "px";
    if (count > 900){
        clearInterval(intervalHandler);
        document.getElementById("join").style.position = "";
        document.getElementById("join").style.left = "";
        document.getElementById("join").style.top = "";
    }
}


window.onload = function(){
    setTimeout(initAnimatedBox,3000);
};
