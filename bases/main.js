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
    const antman = new Avenger("AntMan", "Capitan", "Scot Lang");
    console.log(antman);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=main.js.map