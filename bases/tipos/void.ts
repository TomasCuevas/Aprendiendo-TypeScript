(() => {
  function callSuperman(): void {
    return undefined;
  }

  const a = callSuperman();
  console.log(a);

  const callBatman = (): void => {
    return;
  };

  const b = callBatman();
  console.log(b);
})();
