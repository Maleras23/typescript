"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getNombre() {
            return this.name;
        }
    };
    console.log(flash);
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
    const catWoman = new Mutant(23, 'Catwoman', 'Sara');
    console.log(catWoman.mutantPower(23));
    const persona = {
        age: 2,
        sexo: 'm'
    };
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Carlos',
        age: 38,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K25 U2A'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let sumar;
    sumar = (a, b) => {
        return a + b;
    };
    let restar;
    restar = (a, b) => {
        return a - b;
    };
    console.log(sumar(2, 4));
    console.log(restar(2, 4));
})();
//# sourceMappingURL=main.js.map