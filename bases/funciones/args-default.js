"use strict";
(() => {
    const fullName = (firstname, lastname, upper = false) => {
        if (upper)
            return `${firstname} ${lastname || ""}`.toUpperCase();
        return `${firstname} ${lastname || ""}`;
    };
    const name = fullName("Tony", "Stark", true);
    console.log(name);
})();
