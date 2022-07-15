"use strict";
(() => {
    const fullName = (firstname, lastname) => {
        return `${firstname} ${lastname || ""}`;
    };
    const name = fullName("Tony");
    console.log(name);
})();
//# sourceMappingURL=args-optional.js.map