"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    // let myFunction: (y: string) => string;
    // let myFunction: () => string;
    // myFunction = 10;
    // console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(1, 3));
    // myFunction = greet;
    // console.log(myFunction("Tony"));
    // myFunction = saveTheWorld;
    // console.log(myFunction());
})();
