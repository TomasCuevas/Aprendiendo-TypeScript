(() => {
  const hero: string = "Iron Man";

  function returnHero(): string {
    return hero;
  }

  const activateBatisignal = (): string => {
    return "Batiseñal activada!";
  };

  console.log(typeof activateBatisignal);

  const heroName = returnHero();
  console.log(heroName);
})();
