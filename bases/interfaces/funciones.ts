(() => {
  interface addTwoNumber {
    (a: number, b: number): number;
  }

  let addNumbersFunctionLet: addTwoNumber;
  addNumbersFunctionLet = (a: number, b: number) => {
    return a + b;
  };

  const addNumbersFunctionConst: addTwoNumber = (a: number, b: number) => {
    return a + b;
  };
})();
