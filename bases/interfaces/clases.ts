(() => {

    interface Xmen { 
        name: string;
        realName: string;
        mutantPower( id: number ): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        constructor (
        public age: number ,
        public name: string,
        public realName: string,
        ){}
        mutantPower( id: number ) {
            return this.name + ' ' + this.realName;
        }
    }   

    const catWoman: Mutant = new Mutant (23, 'Catwoman', 'Sara')

    console.log( catWoman.mutantPower(23))


    //* Extendiendo una interface 

    interface Human2 extends Human {
        sexo: string;
    }

    const persona: Human2 = {
        age: 2,
        sexo: 'm'
    }

})()



