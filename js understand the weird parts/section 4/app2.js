var stern = {
    firstName: "semasuka",
    lastName: "stern",
    city:"buja",
    address:{
        street: "av. des EU",
        city: "Buja",
        state: "Buja marie"
    }
};
stern.address2 = {
    street: "jamhuri",
    city: "Nairobi",
    state: "Nairobi"
};


function greet (person){
    console.log("Hi "+ person.city );
}


greet({
    firstName:"john",
    lastName:"sinarinzi",
    age:"22",
    city:"gitega"
});


greet(stern);
