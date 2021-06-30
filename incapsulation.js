function MyClass() {
    let privateMethod = function() {
        console.log("private");
    };

    this.publicMethod = function() {
        console.log("public");
    }
};

let obj1 = new MyClass();
console.log(obj1.publicMethod());