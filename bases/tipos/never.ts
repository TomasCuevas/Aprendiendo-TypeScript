(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

  error("Auxilio");

  const returnNumberOrError = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }

    return 1;
  };

  returnNumberOrError("auxilio");
})();
