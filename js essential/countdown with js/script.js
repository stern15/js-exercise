var intervalHandler;
var secondsRem;

function resetPage(){
    document.getElementById("inputArea").style.display = "block";
}

function tick(){
    var timeDisplay = document.getElementById("time");

    var min = Math.floor(secondsRem / 60);
    var sec = secondsRem - (min * 60);

    if(sec < 10){
        sec = "0" + sec;
    }
    var message = sec +":"+ min;
    timeDisplay.innerHTML = message;

    if (secondsRem === 0){
        alert("Done");
        clearInterval(intervalHandler);
        resetPage();
    }
    secondsRem--;

}

function startCountdown(){
    var minutes = document.getElementById("minutes").value;

    if(isNaN(minutes)){
        alert("Pleaser enter a number");
        return;
    }
    secondsRem = minutes * 60;
    intervalHandler = setInterval(tick,1000);
    document.getElementById("inputArea").style.display = "none";
}

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






























