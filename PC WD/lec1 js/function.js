// Non Primitive => Array, object, function

function sayHi(param){
    /* console.log("Hello from sayHI");
    console.log("Param recieved", param);
    return "return form function"; */
    // random keyword
    let rVal = Math.random() > 0.5 ? true : "less then 0.5";
    return rVal;
}

sayHi(10);
sayHi("Hello");
let rVal = sayHi([1,2,3,4,5]);
console.log("rVal",rVal);
