(() =>{
    //* forma larga de crear una clase     
    class Avenger {
        private name: string;
        public team: string;
        public realName?: string;
        static avgAge: number = 35;
        
        constructor( name: string, team: string, realName?: string ){
            this.name = name;
            this.team = team;
            this.realName = realName;

        }
    }

    // const antman: Avenger = new Avenger('AntMan', 'Capitan');
    // console.log( antman )
    // console.log( Avenger.avgAge)

    //* Forma corta de crear una clase
    class Avenger2 {
        static avgAge: number = 55;

        //* Como se ven los metodos estaticos dentro de las clases 
        static getAvgAge() {
            return this.name;
        }

        constructor(
            private name: string, 
            public team: string, 
            public realName?: string
        ){}

        //* Como se ven los metodos dentro de una clase
        
       public bio() {
            return `${ this.name } (${ this.team })`
        }

    }

    // const batman: Avenger2 = new Avenger2('Batman', 'Superman');
    // console.log(batman)

    // console.log( batman.bio())
})()