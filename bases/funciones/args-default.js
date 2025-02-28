"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No last name'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
