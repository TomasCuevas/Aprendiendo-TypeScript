(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    public salvarMundo(): string {
      return "Mundo a salvo.";
    }
  }
  class Villian extends Mutante {
    public conquistarMundo(): string {
      return "Mundo conquistado.";
    }
  }

  const wolverine: Xmen = new Xmen("Wolverine", "Logan");
  const magneto: Villian = new Villian("Magneto", "Magnus");

  console.log(wolverine.salvarMundo());
  console.log(magneto.conquistarMundo());

  const printName = (character: Mutante) => {
    console.log(character.name);
  };

  printName(wolverine);
})();
