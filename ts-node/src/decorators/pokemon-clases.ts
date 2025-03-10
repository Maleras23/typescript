// Video 2 decoradores de clases 
function printToConsole( constructor: Function) {
    console.log( constructor )
}

// Video 3 decoradores de fabrica
const printToConsoleConditional = ( print: boolean = false ):Function => {
    if ( print ) {
        return printToConsole;
    } else {
        return () => {}
    }
}

// Video 4 decoradores para bloquear prototipos
const bloquearPrototipo = function( constructor: Function ) {
    Object.seal( constructor )
    Object.seal( constructor.prototype)
}

// Video 5 decoradores de metodos
function CheckValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ){

        const originalMethod = descriptor.value;

        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800 ){
                return console.error('El id del pokemon debe estar entre 1 y 800')                
            } else {
                return originalMethod(id)
            }
        }
    }
}

// Video 6 decoradores de propiedades (este bloquea la propiedad y solo sirve de lectura)
function readonly( isWritable: boolean = true): Function {
    return function(target: any, propertyKey: string){

        const descriptor: PropertyDescriptor = {
            get() {
                console.log( this )
                return 'Fernando'
            },
            set( this, val ){
                // console.log(this, val)
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}


@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {

    @readonly(false)
    public publicApi: string = 'https://pokeapi.co/'

    constructor (
        public name: string,
    ){}

    @CheckValidPokemonId()
    savePokemonToDB( id: number ) {
        console.log(`Pokemon guardado en DB ${ id }`)
    }
}