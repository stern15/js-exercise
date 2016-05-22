var ImageGrab = document.getElementById("mainImage");

var ImageArray = ["_images/beach_yoga.jpg","_images/cali_flag.jpg","_images/lunch.jpg","_images/mission_look.jpg","_images/overlook.jpg","_images/tour_badge.jpg"];

var ImageIndex = 0;


function Slides (){
    ImageGrab.setAttribute("src",ImageArray[ImageIndex]);
    ImageIndex++;
    if (ImageIndex >= ImageArray.length){
        ImageIndex = 0;
    }
}

var intervalHandler = setInterval(Slides,2000);

ImageGrab.onclick = function (){
    clearInterval(intervalHandler);
};


