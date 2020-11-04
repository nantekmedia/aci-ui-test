import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'acp-ui';
import { TranslateService } from '@ngx-translate/core';

// import { AuthenticationService } from '@app/_services';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthenticationService,
        private _translate: TranslateService,
    ) // private authenticationService: AuthenticationService
    {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
        _translate.addLangs(['en', 'fr']);
        // this language will be used as a fallback when a translation isn't found in the current language 
        _translate.setDefaultLang('fr');
         // the lang to use, if the lang isn't available, it will use the current loader to get them
        _translate.use('fr');
    }
    
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        
        // this._translate.addLangs(['en', 'fr']);
        // // this language will be used as a fallback when a translation isn't found in the current language 
        // this._translate.setDefaultLang('fr');
        //  // the lang to use, if the lang isn't available, it will use the current loader to get them
        // this._translate.use('en');
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }        

        if(this.authService.login(this.f.username.value, this.f.password.value)){
            this.router.navigate(['/acp/ui-demos']);
            this.loading = true;
        }
        else {
            this.error = 'Wrong credentials';
            this.f.password.setValue('');            
            this.f.password.setErrors(null);
        }
        // this.authenticationService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.error = error;
        //             this.loading = false;
        //         });
    }
}
