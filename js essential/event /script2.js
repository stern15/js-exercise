function prepareEvenListener() {
    var myImage = document.getElementById("mainImage");
    myImage.onclick = function () {
        alert("I just clicked the image");
    };
}

window.onload = function(){
    prepareEvenListener();
};
