"use strict";
(() => {
    const fullName = (firstname, lastname) => {
        return `${firstname} ${lastname}`;
    };
    const name = fullName("Tony", "Stark");
    console.log(name);
})();
