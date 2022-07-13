(() => {
  let isSuperman: Boolean = true;
  let isBatman: Boolean = false;

  isSuperman = isBatman ? true : false;

  console.log({ isBatman, isSuperman });
})();
