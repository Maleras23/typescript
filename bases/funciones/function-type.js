"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    // myFunction = 10;
    // console.log(myfunction)
    // myFunction = addnumbers;
    // console.log( myfunction(1, 2) )
    // ? myFunction = gret;
    // ? console.log( myFunction( 'Fernando' ) )
    myFunction = saveTheWorld;
    console.log(myFunction('carlos'));
})();
