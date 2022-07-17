(() => {
  interface Client {
    address?: Address;
    age: number;
    getFullAddress?(): string;
    name: string;
  }

  interface Address {
    city: string;
    cp: number;
    number: number;
    street: string;
  }

  const client: Client = {
    address: {
      city: "Vera",
      cp: 3550,
      number: 2823,
      street: "Belgrano",
    },
    age: 22,
    name: "Tomas",
  };

  const client2: Client = {
    address: {
      city: "San Francisco",
      cp: 2330,
      number: 5320,
      street: "Av. Street",
    },
    age: 20,
    name: "Sorana",
  };
})();
