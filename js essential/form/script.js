var errorVal = document.getElementById("errorMessage");
var emailVal = document.getElementById("email").value;
var form = document.getElementById("frmContact");

function submitFormHandler(){
    form.onsubmit = function(){
    if (emailVal === ""){
        errorVal.innerHTML = "Please provide at least an email";
        return false;
    }
    else{
        errorVal.innerHTML = "";
        return true;
    }
    };
}

window.onload = function (){
    submitFormHandler();
};
