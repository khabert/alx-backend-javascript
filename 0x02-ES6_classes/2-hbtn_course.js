class HolbertonCourse {
    constructor(name, length, students) {
        if(typeof name !== "string"){
            throw "Name must be a string";
        } else {
            this._name = name
        }
        if(typeof length !== "number"){
            throw "Length must be a number";
        } else {
            this._length = length
        }
        if(typeof students !== "object"){
            throw "students must be an object"
        } else {
            this._students = students
        }        
    }
    get name(){
        return this._name
    }
    get length(){
        return this._length
    }
    get students(){
        return this._students
    }
    set name(her){
        return this._name = her
    }
    set length(num){
        return this._length = num
    }
    set students(john){
        return this._students = john
    }
}
const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);
try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}