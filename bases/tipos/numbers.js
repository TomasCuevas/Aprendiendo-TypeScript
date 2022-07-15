"use strict";
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
//# sourceMappingURL=numbers.js.map