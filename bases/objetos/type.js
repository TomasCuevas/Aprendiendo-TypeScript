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
