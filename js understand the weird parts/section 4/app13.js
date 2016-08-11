function greet(firstName,lastName,language){
    language = language || "en";

    if(language === "en"){
        console.log("hello "+firstName+" "+lastName);
    }
    if(language === "es"){
        console.log("holla "+firstName+" "+lastName);
    }

}
function greetEnglish(firstName,lastName){
    greet(firstName,lastName,"en");
}
function greetSpanish(firstName,lastName){
    greet(firstName,lastName,"es");
}
greetEnglish("stern","semasuka");
greetSpanish("fernando","sebastian");
