(() => {
  const batman: String = "Batman";
  const volcanNegro: String = `Volcan Negro`;

  console.log(`I'm ${batman}`);
  console.log(batman.toUpperCase());
  console.log(batman[10]?.toUpperCase() || "No esta presente");
})();
