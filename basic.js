// var - function scoped

function testVar() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log("Inseide block: ", x);
    }
    console.log("Outside block: ", x);
    
}

// let - block scoped
function testLet() {
    let y = 10;
    if (true) {
        let y = 20;
        console.log("Inseide block: ", y);
    }
    console.log("Outside block: ", y);
    
}

function testConst() {
    const key = 30;
    console.log("Key-> ", key);
    // key = 32;    //      TypeError: Assignment to constant variable.
}

console.log("Var..");
testVar();
console.log("Let..");
testLet();
console.log("Const keyword: ");
testConst();