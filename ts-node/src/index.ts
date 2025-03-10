import { Pokemon } from "./decorators/pokemon-clases";



const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'

// charmander.savePokemonToDB(-5);
charmander.publicApi = 'https://fernando-herrera.com';
console.log( charmander )