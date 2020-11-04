import { InMemoryDbService } from 'angular-in-memory-web-api';
// import * as products from '../assets/db/products.json';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let products = [
            { id: 1, name: 'Windstorm' },
            { id: 2, name: 'Bombasto' },
            { id: 3, name: 'Magneta' },
            { id: 4, name: 'Tornado' },
        ];
        return { products };
    }
}
