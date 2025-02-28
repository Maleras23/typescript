(()=> {

    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatiSignal = ():string => {
        return 'Batisenal activada';
    }

    console.log(typeof activateBatiSignal)

    const heroName = returnName();
})()