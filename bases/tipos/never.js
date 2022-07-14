"use strict";
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
