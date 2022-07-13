const a: Number = 10;
let b: Number = 10;

function sayHello(msg: String) {
  console.log("Bienvenido " + msg + ".");
}

sayHello("Tomas");

(() => {
  const a: Number = 50;
  console.log(a);
})();
