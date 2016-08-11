function greet (firstName,lastName,language){
    language = language || "en";

    if(arguments.length === 0){
        console.log("missing parameter");
        console.log("----------------");
        return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);
    console.log("the arguments 0 is: " + arguments[1]);
    console.log("----------------");
}
greet ();
greet ("stern");
greet ("stern","semasuka");
greet ("stern","semasuka","ki");

