function a(){
    console.log(this);
    this.newvariable = "hello";
}

a();
console.log(newvariable);


var c = {
    name:"stern",
    greetings:function(){
            var self = this;
            self.name="miterrand";
            console.log(self);

        var setNewName = function(newName){
            self.name = newName;
        };

        setNewName("yvette");
        console.log(self);
    }
};

c.greetings();
