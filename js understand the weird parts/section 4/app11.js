var Arr = [1,
          "stern",
          true,
          {
              name:"mitterand",
              address:"kigobe"
          },
          function(name){
              var greetings = "hello ";
              console.log(greetings + name);
          }
];
console.log(Arr);
Arr[4](Arr[3].name);
