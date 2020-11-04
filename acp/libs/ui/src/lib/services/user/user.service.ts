import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { MenuService } from '../menu/menu.service';

declare const require: any; // Important
// Load Chance
const Chance = require('chance');
// Instantiate Chance so it can be used
const chance = new Chance();

export interface Permission {
    permissionId: string;
    write: boolean;
    list?: boolean;
    create?: boolean;
    read: boolean;
    update?: boolean;
    delete?: boolean;
}

export interface User {
    id: string;
    username: string;
    password: string;
    fullName: string;
    firstName?: string;
    lastName?: string;
    permissions: Permission[];
    avator?: string;
    email?: string;
}

export enum PermissionsOperationEnum {
    write = 'write',
    list = 'list',
    create = 'create',
    read = 'read',
    update = 'update',
    delete = 'detete',
}

export enum PermissionsEnum {
    dev = 'dev',
    admin = 'admin',
    settings = 'settings',
    profile = 'profile',
    client = 'client',
    dsl = 'dsl',
    scip = 'scip',
    authService = 'authService',
    supplierMatching = 'supplierMatching',
    supplierNetwork = 'supplierNetwork',
    supoPlus = 'supoPlus',
    assentia = 'assentia',
}

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private _currentUserSubject = new BehaviorSubject<any>({});
    public selectUserId = '';

    private _usersList: User[] = []

    public get usersList(): User[] {
        return this._usersList;
    }

    public currentUser = this._currentUserSubject.asObservable().pipe(distinctUntilChanged());

    constructor(private _menuService: MenuService) {

        this._usersList = [
            {
                id: '1',
                username: 'admin',
                password: 'admin',
                fullName: 'admin@assentcompliance.com',
                firstName: 'Jone',
                lastName: 'Dow',
                email: 'admin@assentcompliance.com',
                // avator: 'admin.png',
                // avator: 'admin2.jpg',
                // avator: 'admin3.png',
                // avator: 'admin4.png',
                avator: 'admin5.png',
                permissions: [
                    {
                        permissionId: PermissionsEnum.dev,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.admin,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.settings,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.profile,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.client,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.dsl,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.scip,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.authService,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierMatching,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierNetwork,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supoPlus,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.assentia,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                ],
            },
            {
                id: '2',
                username: 'jsn',
                fullName: 'jean-sebastien.nantel@assentcompliance.com',
                firstName: 'Jean-Sebastien',
                lastName: 'Nantel',
                email: 'jsn@assentcompliance.com',
                password: 'jsn',
                avator: 'user-profile.png',
                permissions: [
                    {
                        permissionId: PermissionsEnum.dev,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.admin,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.settings,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.profile,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.client,
                        write: true,
                        list: false,
                        create: true,
                        read: true,
                        update: false,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.dsl,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.scip,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.authService,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierMatching,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierNetwork,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supoPlus,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.assentia,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                ],
            },
            {
                id: '3',
                username: 'manager',
                fullName: 'manager@assentcompliance.com',
                password: 'manager',
                firstName: chance.first(),
                lastName: chance.last(),
                email: chance.email(),
                avator: 'admin.png',
                permissions: [
                    {
                        permissionId: PermissionsEnum.dev,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.admin,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.settings,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.profile,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.client,
                        write: true,
                        list: false,
                        create: true,
                        read: true,
                        update: false,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.dsl,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.scip,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.authService,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierMatching,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierNetwork,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supoPlus,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.assentia,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                ],
            },
            {
                id: '4',
                username: 'cs',
                fullName: 'cs@assentcompliance.com',                
                firstName: chance.first(),
                lastName: chance.last(),
                email: chance.email(),
                password: 'cs',
                avator: 'cs2.png',
                permissions: [
                    {
                        permissionId: PermissionsEnum.dev,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.admin,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.settings,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.profile,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.client,
                        write: true,
                        list: false,
                        create: true,
                        read: true,
                        update: false,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.dsl,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.scip,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.authService,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierMatching,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierNetwork,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supoPlus,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.assentia,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                ],
            },
            {
                id: '5',
                username: 'dev',
                fullName: 'dev@assentcompliance.com',          
                firstName: chance.first(),
                lastName: chance.last(),
                email: chance.email(),
                password: 'dev',
                avator: 'dev5.jpg',
                permissions: [
                    {
                        permissionId: PermissionsEnum.dev,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.admin,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.settings,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.profile,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.client,
                        write: true,
                        list: false,
                        create: true,
                        read: true,
                        update: false,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.dsl,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.scip,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.authService,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierMatching,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierNetwork,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supoPlus,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.assentia,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                ],
            },
            {
                id: '6',
                username: 'cio',
                fullName: 'cio@assentcompliance.com',                
                firstName: chance.first(),
                lastName: chance.last(),
                email: chance.email(),
                password: 'cio',
                avator: 'cio.png',
                permissions: [
                    {
                        permissionId: PermissionsEnum.dev,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.admin,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.settings,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.profile,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.client,
                        write: true,
                        list: false,
                        create: true,
                        read: true,
                        update: false,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.dsl,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.scip,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.authService,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierMatching,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supplierNetwork,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.supoPlus,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                    {
                        permissionId: PermissionsEnum.assentia,
                        write: true,
                        list: true,
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                    },
                ],
            },
        ];

        // Load local storage dataSource
        // if (localStorage.getItem('dataSource')) {
        //     this._usersList = JSON.parse(localStorage.getItem('dataSource'));
        // } else {
        //     localStorage.setItem('dataSource', JSON.stringify(this._usersList));
        // }

        // Load default dataSource
        localStorage.setItem('dataSource', JSON.stringify(this._usersList));
        
    }

    public hasPermission(permissionId: string, operation: string) {
        let retVal = false;
        const user = this.getUserById(this.selectUserId);

        const permissionFound = user.permissions.find(
            (x) => x.permissionId.toUpperCase() === permissionId.toUpperCase()
        );

        retVal = permissionFound[operation];
        return retVal;
    }

    public getPermission(userId: string, permissionId: string) {
        const _user: User = this.getUserById(userId);
        if (_user) {
            const _permission = _user.permissions.find((x) => x.permissionId === permissionId);
            return _permission;
        } else {
            return null;
        }
    }

    // tslint:disable-next-line: max-line-length
    public setPermission(userId: string, permissionId: string, permissionVal: boolean, permissionOperation?: string): boolean {
        const _user: User = this.getUserById(userId);
        const _permission = _user.permissions.find((x) => x.permissionId === permissionId);
        const _permissionIndex = _user.permissions.findIndex((x) => x.permissionId === permissionId);
        let retVal = false;

        if (_permission) {
            if (permissionOperation !== undefined) {
                _permission[permissionOperation] = permissionVal;
            } else {
                _permission.read = permissionVal;
            }
            retVal = true;
        }

        return retVal;
    }

    public saveLocal(){
        localStorage.setItem('dataSource', JSON.stringify(this.usersList));
    }

    public selectUser(userId: string) {
        this.setUser(this._usersList.find((x) => x.id === userId));
    }

    public setUser(_user: User) {
        this.selectUserId = _user.id;
        this._currentUserSubject.next(_user);
        this._menuService.closeAllMenus();
        localStorage.setItem('userId', _user.id);
    }

    public getUserById(userId: string): User {
        return this._usersList.find((item) => item.id === userId);
    }

    public logout() {
        this.selectUserId = '';
        this._currentUserSubject.next(null);
        localStorage.setItem('userId', '');
    }
}
