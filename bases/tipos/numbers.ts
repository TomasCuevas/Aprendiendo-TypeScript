(() => {
  let avengers: Number = 32;
  console.log({ avengers });

  const villians: Number = 20;

  if (avengers < villians) {
    console.log("Estamos en problemas");
  } else {
    console.log("Nos salvamos.");
  }

  avengers = Number("55A");
  console.log({ avengers });
})();
