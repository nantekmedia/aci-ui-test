import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { PermissionsEnum, User, UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })
export class PermissionsGuard implements CanActivate {
    constructor(
        private router: Router,
        private _userService: UserService
    )
    {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (route.data.permissions) {
            const hasPermission = this._userService.getPermission(
                localStorage.getItem('userId'),
                route.data.permissions
            );

            if(!hasPermission){           
                this.router.navigate(['acp/error']);
                return false;
            }

            if(route.data.permissionOperation)
            {
                if (hasPermission && hasPermission[route.data.permissionOperation]) {
                    return true;
                } else {
                    this.router.navigate(['acp/error']);
                    return false;
                }
            }
            else
            {
                if (hasPermission && hasPermission.read) {
                    return true;
                } else {
                    this.router.navigate(['acp/error']);
                    return false;
                }
            }     
        }
    }
}
