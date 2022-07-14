"use strict";
(() => {
    const fullName = (firstname, ...rest) => {
        return `${firstname} ${rest.join(" ")}`;
    };
    const ironman = fullName("Tony", "El Vaquero", "Stark");
    console.log(ironman);
})();
