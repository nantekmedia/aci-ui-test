import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { UserService } from '../user/user.service';
import { User } from '../user/user.service';
// import { environment } from '@environments/environment';
// import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    // private currentUserSubject: BehaviorSubject<User>;
    // public currentUser: Observable<User>;

    constructor(private http: HttpClient, private userService: UserService) {
        // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        // this.currentUser = this.currentUserSubject.asObservable();
    }

    // public get currentUserValue(): User {
    //     return this.currentUserSubject.value;
    // }

    // public logout() {
    //     // remove user from local storage to log user out
    //     localStorage.removeItem('currentUser');
    //     this.currentUserSubject.next(null);
    // }

    public login(username: string, password: string): boolean {
        let retVal = false;
        // console.log('login: ' + username);
        
        const user = this.userService.usersList.find(
            (x) => x.username === username && x.password === password
        );

        if (user) {
            // console.log('login');
            this.userService.selectUser(user.id);
            retVal = true;
        } else {
            // console.log('Wrong Login');
            retVal = false;
        }

        return retVal;
    }

    logout() {
        this.userService.logout();
        //     // remove user from local storage to log user out
        //     localStorage.removeItem('currentUser');
        //     this.currentUserSubject.next(null);

    }
}
