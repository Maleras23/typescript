"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clarck Kent',
        age: 60,
        powers: ['Super Fuerza'],
        getNombre() {
            return this.name;
        }
    };
    console.log(flash);
})();
