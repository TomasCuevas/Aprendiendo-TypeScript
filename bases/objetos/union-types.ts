(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Tomas";
  console.log(myCustomVariable);

  myCustomVariable = 20;
  console.log(myCustomVariable);

  myCustomVariable = {
    name: "Tomas",
    age: 22,
    powers: [0],
  };
  console.log(myCustomVariable);
})();
