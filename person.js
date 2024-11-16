// module wrapper function

// (function(exports, require, module, __filename, __dirname){
    // this is actually going to be wrapped around the code below when its exported from here
// })


// console.log(exports, require, module, __filename, __dirname) can be called without definition of vars

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log("hi, my name is " + this.name)
    }
}
module.exports = Person