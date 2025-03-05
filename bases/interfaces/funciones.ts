(() =>{
     
    interface addTwoNumbers {
        (a: number, b: number): number;

    }

    let sumar: addTwoNumbers;

    sumar = (a:number, b: number): number => {
        return a + b;
    }

    let restar: addTwoNumbers;

    restar = (a:number, b: number): number => {
        return a - b;
    }
    
    console.log( sumar(2, 4));
    console.log( restar(2, 4));




})()