(() => {
  const fullName = (firstname: string, lastname?: string): string => {
    return `${firstname} ${lastname || ""}`;
  };

  const name = fullName("Tony");
  console.log(name);
})();
