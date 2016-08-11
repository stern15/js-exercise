function greet (firstName,lastName,language){
    language = language || "en";
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log("----------------");
}
greet ();
greet ("stern");
greet ("stern","semasuka");
greet ("stern","semasuka","ki");
