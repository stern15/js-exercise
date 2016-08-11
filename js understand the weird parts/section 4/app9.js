function a(){
    console.log(this);
    this.newvariable = "hello";
}

a();
console.log(newvariable);


var c = {
    name:"stern",
    greetings:function(){
            this.name="miterrand";
            console.log(this);

        var setNewName = function(newName){
            this.name = newName;
        };

        setNewName("yvette");
        console.log(this);
    }
};

c.greetings();
