var myReq;

if(window.XMLHttpRequest){
    myReq = new XMLHttpRequest();
}
else if(window.ActiveXObject){
    myReq = new ActiveXObject("Microsoft.XMLHTTP");
}
myReq.onreadystatechange = function(){
    console.log("we are called");
    console.log(myReq.readystate);
    if (myReq.readyState===4){
        var p = document.createElement("p");
        var t = document.createTextNode(myReq.readyState);
        p.appendChild(t);
        document.getElementById("mainContent").appendChild(p);
    }
};

myReq.open('GET','simple.txt',true);
myReq.send(null);
