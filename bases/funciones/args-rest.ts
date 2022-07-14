(() => {
  const fullName = (firstname: string, ...rest: string[]): string => {
    return `${firstname} ${rest.join(" ")}`;
  };

  const ironman = fullName("Tony", "El Vaquero", "Stark");
  console.log(ironman);
})();
