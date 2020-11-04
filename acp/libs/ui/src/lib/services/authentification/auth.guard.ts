import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { PermissionsEnum, User, UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
    ) 
    {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {        
        // console.log('AuthGuard');
        if (localStorage.userId !== '')
        {            
            return true
        }            
        else
        {
            this.router.navigate(['auth/login']);
        }        
    }
    
}
