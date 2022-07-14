(() => {
  const fullName = (firstname: string, lastname: string): string => {
    return `${firstname} ${lastname}`;
  };

  const name = fullName("Tony", "Stark");
  console.log(name);
})();
