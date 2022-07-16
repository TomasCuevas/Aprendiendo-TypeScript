(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger llamado");
    }

    protected getFullName(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  class XMen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor Xmen llamado");
    }

    public getFullNameFromXmen(): void {
      console.log(super.getFullName());
    }
  }

  const wolverine = new XMen("Wolverine", "Logan", true);

  console.log(wolverine);
  wolverine.getFullNameFromXmen();
})();
