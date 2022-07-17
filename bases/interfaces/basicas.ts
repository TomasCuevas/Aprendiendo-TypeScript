(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  }

  let ironman: Hero = {
    name: "Tony Stark",
    age: 52,
    powers: [1, 2],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: [1, 2],

    getName() {
      return this.name;
    },
  };
})();
