(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      // console.log("Constructor Avenger llamado");
    }

    protected getFullName(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  class XMen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      // console.log("Constructor Xmen llamado");
    }

    get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    set setName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe de tener al menos 3 caracteres");
      }
      this.name = name;
    }

    public getFullNameFromXmen(): void {
      console.log(super.getFullName());
    }
  }

  const wolverine = new XMen("Wolverine", "Logan", true);

  // console.log(wolverine.fullName);
  // wolverine.setName = "Wo";
  // console.log(wolverine.fullName);
  // wolverine.getFullNameFromXmen();
})();
