"use strict";
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    console.log("paso por aqui");
    const villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    console.log("paso por aca");
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    console.log(apocalipsis);
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    const fullName = (firstname, lastname, upper = false) => {
        if (upper)
            return `${firstname} ${lastname || ""}`.toUpperCase();
        return `${firstname} ${lastname || ""}`;
    };
    const name = fullName("Tony", "Stark", true);
    console.log(name);
})();
(() => {
    const fullName = (firstname, lastname) => {
        return `${firstname} ${lastname || ""}`;
    };
    const name = fullName("Tony");
    console.log(name);
})();
(() => {
    const fullName = (firstname, lastname) => {
        return `${firstname} ${lastname}`;
    };
    const name = fullName("Tony", "Stark");
    console.log(name);
})();
(() => {
    const fullName = (firstname, ...rest) => {
        return `${firstname} ${rest.join(" ")}`;
    };
    const ironman = fullName("Tony", "El Vaquero", "Stark");
    console.log(ironman);
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(1, 3));
})();
(() => {
    const hero = "Iron Man";
    function returnHero() {
        return hero;
    }
    const activateBatisignal = () => {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatisignal);
    const heroName = returnHero();
    console.log(heroName);
})();
(() => {
    let ironman = {
        name: "Tony Stark",
        age: 52,
        powers: ["volar", "super fuerza"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["volar", "super fuerza"],
    };
})();
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
    let myCustomVariable = "Tomas";
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: "Tomas",
        age: 22,
        powers: [0],
    };
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr. Strange";
    console.log(avenger.charAt(0));
    avenger = 150.2312312;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villans = ["Omega Rojo", "Dormamu", "Duende Verde"];
    villans.forEach((villan) => console.log(villan.toUpperCase()));
    numbers.forEach((number) => console.log(number));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = isBatman ? true : false;
    console.log({ isBatman, isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium_min"] = 2.5] = "medium_min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["medium_max"] = 7.5] = "medium_max";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error("Auxilio");
    const returnNumberOrError = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    returnNumberOrError("auxilio");
})();
(() => {
    let nada = undefined;
    console.log(nada);
    let isActive = undefined;
    console.log(isActive);
})();
(() => {
    let avengers = 32;
    console.log({ avengers });
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos.");
    }
    avengers = Number("55A");
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = "Batman";
    const volcanNegro = `Volcan Negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta presente");
})();
(() => {
    const hero = ["Dr. Strange", 100, true];
    hero[0] = "Iron Man";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callSuperman() {
        return undefined;
    }
    const a = callSuperman();
    console.log(a);
    const callBatman = () => {
        return;
    };
    const b = callBatman();
    console.log(b);
})();
//# sourceMappingURL=main.js.map