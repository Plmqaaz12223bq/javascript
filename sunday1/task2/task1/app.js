let person = {
    firstname: "bahaa",
    lastname: "aldeen",
    id: 201720200,
    enter_name: function(x, y){
        this.firstname = x;
        this.lastname = y;
    },
    showname: function(){
        return this.firstname + " " + this.lastname;
    }
};
