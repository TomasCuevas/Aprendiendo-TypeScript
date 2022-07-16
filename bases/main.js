"use strict";
(() => {
  class Avenger {
    constructor(name, team, realName) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
    bio() {
      return `${this.name} (${this.team})`;
    }
    static getAvgAge() {
      return this.name;
    }
  }
  Avenger.avgAge = 35;
})();
(() => {
  class Avenger {
    constructor(name, realName) {
      this.name = name;
      this.realName = realName;
      console.log("Constructor Avenger llamado");
    }
    getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }
  class XMen extends Avenger {
    constructor(name, realName, isMutant) {
      super(name, realName);
      this.isMutant = isMutant;
      console.log("Constructor Xmen llamado");
    }
    get fullName() {
      return `${this.name} - ${this.realName}`;
    }
    set setName(name) {
      if (name.length < 3) {
        throw new Error("El nombre debe de tener al menos 3 caracteres");
      }
      this.name = name;
    }
    getFullNameFromXmen() {
      console.log(super.getFullName());
    }
  }
  const wolverine = new XMen("Wolverine", "Logan", true);
  console.log(wolverine.fullName);
  wolverine.setName = "Wo";
  console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map
