(()=> {

    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor ( public name: string ) {}

        static callApocalipsis(): Apocalipsis {
            if ( !Apocalipsis.instance ){
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el unico');
            }

            return Apocalipsis.instance;           
        }

        changeName( newName: string): void {
            this.name = newName
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();

    apocalipsis.changeName('Carlos');

    console.log(apocalipsis, apocalipsis1, apocalipsis2);

})()