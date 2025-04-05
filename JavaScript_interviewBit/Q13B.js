//Prototypal inheritance

//When object 2 is inheriting properties from its proto pointing to object
let object = {
    name: "Akshay",
    city: "Dehradun",
    getIntro: function(){
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name: "Aditya",
    city: "Hyderabad"
}

//never do this
object2.__proto__ = object;


