var person = {
    firstName:"semasuka",
    lastName:"stern",
    getFullName:function(){
        var fullname= this.firstName + " " + this.lastName;
        return fullname;
    }
};
var logName = (function (){
    console.log("logged: "+ this.getFullName());
}.bind(person));

logName();
