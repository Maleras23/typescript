(() => {

    const addNumber = ( a: number, b: number ) => a + b;        
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo esta salvado`;
    
    let myFunction: (y: string) => string;

    // myFunction = 10;
    // console.log(myfunction)

    // myFunction = addnumbers;
    // console.log( myfunction(1, 2) )

    // ? myFunction = gret;
    // ? console.log( myFunction( 'Fernando' ) )

    myFunction = saveTheWorld;
    console.log( myFunction('carlos'))
    
})()