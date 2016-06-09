var intervalHandler;
var seconds;


function startCountdown(){
    var minutes = document.getElementById("minutes").value;

    if(isNaN(minutes)){
        alert("Pleaser enter a number");
        return;
    }
    seconds = minutes * 60;
    intervalHandler = setInterval(tick,1000);
    document.getElementById("inputArea").style.display = "none";
};

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
    document.getElementById("inputArea").appendChild(inputMin);
    document.getElementById("inputArea").appendChild(startBut);

};






























