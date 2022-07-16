(() => {
  class Avenger {
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio(): string {
      return `${this.name} (${this.team})`;
    }

    static getAvgAge(): string {
      return this.name;
    }
  }

  const antman: Avenger = new Avenger("AntMan", "Capitan", "Scot Lang");
  console.log(antman);
  console.log(antman.bio());

  console.log(Avenger.getAvgAge());
})();
