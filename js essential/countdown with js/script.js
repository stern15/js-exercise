
















































window.onload = function(){
    var inputMin = document.createElement("input");
    inputMin.setAttribute("id","minutes");
    inputMin.setAttribute("type","text");

    var startBut = document.createElement("input");
    startBut.setAttribute("id","button");
    startBut.setAttribute("type","button");
    startBut.setAttribute("value","Start countdown");

    startBut.onclick = function(){
        startCountdown();
    };

};






























