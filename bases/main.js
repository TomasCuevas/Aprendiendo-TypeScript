"use strict";
(() => {
  class Mutante {
    constructor(name, realName) {
      this.name = name;
      this.realName = realName;
    }
  }
  class Xmen extends Mutante {
    salvarMundo() {
      return "Mundo a salvo.";
    }
  }
  class Villian extends Mutante {
    conquistarMundo() {
      return "Mundo conquistado.";
    }
  }
  const wolverine = new Xmen("Wolverine", "Logan");
  const magneto = new Villian("Magneto", "Magnus");
  console.log(wolverine.salvarMundo());
  console.log(magneto.conquistarMundo());
  const printName = (character) => {
    console.log(character.name);
  };
  printName(wolverine);
})();
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
    }
    getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }
  class XMen extends Avenger {
    constructor(name, realName, isMutant) {
      super(name, realName);
      this.isMutant = isMutant;
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
})();
//# sourceMappingURL=main.js.map
