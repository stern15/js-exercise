function applyCSS(){
    document.getElementById("mainContent").onclick = function(){
        if(document.getElementById("mainContent").className==="example"){
            document.getElementById("mainContent").className="";

        }
        else{
            document.getElementById("mainContent").className="example";
        }
    };

}

window.onload = function(){
    applyCSS();
};
