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
  const printName = (character) => {};
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
(() => {
  class Apocalipsis {
    constructor(name) {
      this.name = name;
    }
    static callApocalipsis() {
      if (!Apocalipsis.intance) {
        Apocalipsis.intance = new Apocalipsis("Soy apocalipsis... el unico");
      }
      return Apocalipsis.intance;
    }
    changeName(newName) {
      this.name = newName;
    }
  }
  const apocalipsis1 = Apocalipsis.callApocalipsis();
  apocalipsis1.changeName("Tomas");
  console.log(apocalipsis1);
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  console.log(apocalipsis2);
  const apocalipsis3 = Apocalipsis.callApocalipsis();
  console.log(apocalipsis3);
})();
//# sourceMappingURL=main.js.map
