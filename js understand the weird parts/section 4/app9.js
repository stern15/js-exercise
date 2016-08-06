var person = new Object();

person["firstName"]="tonny";
person["lastName"]="semasuka";


var firstNameProp = "firstName";

console.log(person);
console.log(person[firstNameProp]);

console.log(person.firstName);
console.log(person.lastName);


person.address = new Object();
person.address.street = "111 main str.";
person.address.city = "new york";
person.address.state = "NY";
person.address.year = "2011";


console.log(person.address.city);
console.log(person["address"]["state"]);
console.log(person["address"]["year"]);
