function makeGreeting(language){
    return function (firstName,lastName){
        if (language==="en"){
            console.log("hello "+firstName+" "+lastName);
        }
        if (language==="es"){
            console.log("hola "+firstName+" "+lastName);
        }
    };
}
var greetEn = makeGreeting("en");
var greetEs = makeGreeting("es");
greetEn("Semasuka","Stern");
greetEs("Semasuka","Stern");
