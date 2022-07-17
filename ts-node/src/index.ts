import {
  genericFunction,
  genericFunctionArrow,
  printObject,
} from "./generics/generics";

printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5, 6]);
printObject("Un string");

console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunction("Hola Mundo").toUpperCase());

console.log(genericFunctionArrow("Desde la arrow function").toUpperCase());
