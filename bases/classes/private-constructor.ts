(() => {
  class Apocalipsis {
    static intance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.intance) {
        Apocalipsis.intance = new Apocalipsis("Soy apocalipsis... el unico");
      }

      return Apocalipsis.intance;
    }

    public changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  apocalipsis1.changeName("Tomas");
  // console.log(apocalipsis1);

  const apocalipsis2 = Apocalipsis.callApocalipsis();
  // console.log(apocalipsis2);

  const apocalipsis3 = Apocalipsis.callApocalipsis();
  // console.log(apocalipsis3);
})();
