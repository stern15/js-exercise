function adjustSize(){
    var width = 0;
    if (window.innerHeight){
        width = window.innerWidth;
    }
    else if(document.documentElement && document.documentElement.clientHeight){
        width = document.documentElement.clientWidth;
    }
    else if(document.body){
        width = document.body.clientWidth;
    }
    if(width < 600){
        document.getElementById("myCSS").setAttribute("href","_css/narrow.css");
    }
    else{
        document.getElementById("myCSS").setAttribute("href","_css/main.css");
    }
}

window.onresize = function(){
    adjustSize();
};
window.onload = function(){
    adjustSize();
};
