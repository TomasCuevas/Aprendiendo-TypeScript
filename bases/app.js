"use strict";
const a = 10;
let b = 10;
function sayHello(msg) {
    console.log("Bienvenido " + msg + ".");
}
sayHello("Tomas");
(() => {
    const a = 50;
    console.log(a);
})();
