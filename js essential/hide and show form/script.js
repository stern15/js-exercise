

function showPage(){
    document.getElementById("tourSelection").style.display = "none";
    document.getElementById("brochures").onclick= function(){
        if(document.getElementById("brochures").checked){
            document.getElementById("tourSelection").style.display = "block";
        }
        else {
            document.getElementById("tourSelection").style.display = "none";
        }
    };
}


window.onload = function(){
  showPage();
};
