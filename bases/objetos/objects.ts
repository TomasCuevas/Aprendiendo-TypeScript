(() => {
  let ironman: { name: string; age?: number; powers: string[] } = {
    name: "Tony Stark",
    age: 52,
    powers: ["volar", "super fuerza"],
  };

  ironman = {
    name: "Clark Kent",
    // age: 60,
    powers: ["super fuerza"],

    // getNombre() {
    //   return this.name;
    // },
  };

  console.log(ironman);
})();
