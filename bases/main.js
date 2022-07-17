"use strict";
(() => {
    let ironman = {
        name: "Tony Stark",
        age: 52,
        powers: [1, 2],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: [1, 2],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return this.name;
        }
    }
})();
(() => {
    const client = {
        address: {
            city: "Vera",
            cp: 3550,
            number: 2823,
            street: "Belgrano",
        },
        age: 22,
        name: "Tomas",
    };
    const client2 = {
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
(() => {
    let addNumbersFunctionLet;
    addNumbersFunctionLet = (a, b) => {
        return a + b;
    };
    const addNumbersFunctionConst = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map