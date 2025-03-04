(() => {

    interface Client {
        name: string;
        age?: number;        
        address: Address;
        getFullAddress?(id: string ):string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string; 
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }        
    }
    
    const client2 : Client = {
        name: 'Carlos',
        age: 38,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K25 U2A'
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }
    
})()
