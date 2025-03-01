(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getNombre?: ()=> string;

    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }


    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],   
        getNombre() {
            return this.name;

        }
    }

    console.log(flash);

})()