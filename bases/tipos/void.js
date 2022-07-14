"use strict";
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
