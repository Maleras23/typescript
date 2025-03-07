(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            // console.log('Constructor Avenger Llamado');
        }

        protected getFullname() {
            return `${ this.name } ${ this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant:boolean,
        ){
            super(name, realName)
            // console.log('Constructor Xmen llamado')
        }

        get fullName() {
            return `${ this.name } - ${ this.realName }`;
        }
        
        set fullName( name: string){
            if ( name.length < 3 ){
                throw new Error('El nombre debe ser mayor de 3 letras')
            }
            this.name = name;
        }

        getFullnameDesdexmen(){
            console.log( super.getFullname())
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    // wolverine.fullName = 'Lo';
    // console.log(wolverine.fullName);

    // wolverine.getFullnameDesdexmen();


})()