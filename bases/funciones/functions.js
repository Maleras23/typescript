"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batisenal activada';
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
