var myReq;

if(window.XMLHttpRequest){
    myReq = new XMLHttpRequest();
}
else if(window.ActiveXObject){
    myReq = new ActiveXObject("Microsoft.XMLHTTP");
}
myReq.onreadystatechange = function(){
    console.log("we are called");
};

myReq.open("GET","simple.txt",true);
myReq.send(null);
