import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'acp-error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
    public returnUrl: String = '';

    constructor(private _location: Location, private _route: ActivatedRoute, private _router: Router) {
        // this.cartId = this._Router.snapshot.params.cartId;
        // debugger;
        // this.returnUrl = _route.snapshot.queryParams.returnUrl;
        // console.log(this.returnUrl);
    }


    ngOnInit(): void {
        // console.log(this.returnUrl);
        // this._route.paramMap.subscribe((params) => {
        //     debugger;
        //     this.returnUrl = decodeURI(params.get('returnUrl'));
        //     this.returnUrl = params.get('returnUrl');
        //     console.log('this.returnUrl');
        //     console.log(this.returnUrl);
        // });
    }

    public goBack() {
        // console.log(this.returnUrl);
        window.history.go(-2);
        // this._router.navigate([this.returnUrl]);
        // this._location.back();
        // this._location.back();
    }
}
