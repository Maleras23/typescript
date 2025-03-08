import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Villain, Hero } from "../interfaces";
// import { Hero  } from './interfaces/hero';
// import { Villain } from "./interfaces/villain";


// import { Hero } from "./classes/Hero";


// import { Hero as SuperHero, Hero2 } from "./classes/Hero";
// import powers, { Power } from "./data/powers";
// import * as HeroClasses from "./classes/Hero";

// const ironman: SuperHero = new SuperHero('Ironman', 5, 55 );
// const ironman: HeroClasses.Hero = new HeroClasses.Hero('Ironman', 1, 55 );

// const ironman: Hero  = new Hero( 'Ironman', 1, 55);

// console.log(ironman);

// console.log(ironman.power)

//* clase de funciones genericas 

const deadpool = {
    name: 'Deadpool',
    
    realName: 'Wade Wiston Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel )