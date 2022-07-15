"use strict";
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
//# sourceMappingURL=enums.js.map