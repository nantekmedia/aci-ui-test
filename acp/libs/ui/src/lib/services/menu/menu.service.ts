import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    public mainMenu: IMenuItem[];
    public onSetMainMenu: EventEmitter<object> = new EventEmitter();

    constructor() {}

    public setMainMenu(menu: IMenuItem[]) {
        this.mainMenu = menu;
        this.closeAllMenus();
        this.onSetMainMenu.emit(menu);
    }

    public closeAllMenus(){
        if(this.mainMenu)
        {
            for(let i  = 0; i < this.mainMenu.length; i++){
                this.mainMenu[i].isOpen = false;
            }
        }
    }

    public refreshMenu() {
        if(this.mainMenu)
        {
            this.mainMenu = JSON.parse(JSON.stringify(this.mainMenu));
            this.onSetMainMenu.emit(this.mainMenu);
        }
        
    }
}
export interface IMenuItem {
    name: string;
    icon: string;
    route: string;
    isOpen: boolean;
    permission: string;
    children: IMenuItem[];
}
