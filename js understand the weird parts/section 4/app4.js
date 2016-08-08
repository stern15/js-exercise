var objectLiteral = {
    Name : "marry",
    isAProgrammer : true
};

console.log(JSON.stringify(objectLiteral));

var JSON =JSON.parse('{"Name":"stern","isAProgrammer":false}');

console.log(JSON);
