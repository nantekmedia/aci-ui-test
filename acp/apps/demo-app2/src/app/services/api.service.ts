import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMenuItem, MenuService } from 'acp-ui';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private products: [IProduct];
    // private mainMenu: IMenuItem[];

    constructor(private readonly http: HttpClient, private menuService: MenuService) {

        // console.log('ApiService')
        this.http.get('assets/db/products.json').subscribe((data: [IProduct]) => {
            // console.log(data);
            this.products = data;
        });
            
        this.http.get('assets/menus/menu.json').subscribe((data: {main: IMenuItem[]}) => {            
            this.menuService.setMainMenu(data.main);
        });
    }

    public getData(): Observable<any[]> {
        
        // let test: Observable<any> = new Observable();
        const time = new Observable<any[]>((observer) => {
            setTimeout(() => observer.next(this.products), 1000);
        });

        // time.subscribe((data) => {data})
        return time;
        // return this.http.get('api/products');
    }

    public get(name: string): Observable<any[]>{

        const time = new Observable<[IProduct]>((observer) => {
            const obj = this.products.find(o => o.Name === name);
            setTimeout(() => observer.next([obj]), 1000);
        });
        return time;
    }

    public put(product: IProduct){
        const time = new Observable<[IProduct]>((observer) => {       
            this.products.push(product);
            setTimeout(() => observer.next([product]), 1000);
        });
        return time;
    }

    public patch(product: IProduct){
        const time = new Observable<[IProduct]>((observer) => {
            let obj = this.products.find(o => o.Name === product.Name);     
            obj = product;
            // this.products.push(product);
            setTimeout(() => observer.next([obj]), 1000);
        });
        return time;
    }

}

export interface IProduct {
    Name: string;
    Price: string;
    Location: string;
}


