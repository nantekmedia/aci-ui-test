import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderSubService } from '@acp/ui';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PermissionsEnum, PermissionsOperationEnum, User, UserService } from '@acp/ui';
import { MenuService } from 'acp-ui';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
    selector: 'acp-user-details-page',
    templateUrl: './user-details-page.component.html',
    styleUrls: ['./user-details-page.component.scss'],
})
export class UserDetailsPageComponent implements OnInit {
    isChecked = true;
    public formGroup: FormGroup;
    public user: User;
    public PermissionsEnum = PermissionsEnum;
    public PermissionsOperationEnum = PermissionsOperationEnum;
    public editMode = false;

    public userDetailsForm: FormGroup;
    public myFormArray: FormArray;

    public userInfoFormGroup: FormGroup;
    private _initialValues;

    constructor(private route: ActivatedRoute, private _router: Router, public subHeaderService: HeaderSubService, 
                public formBuilder: FormBuilder, public userService: UserService, public menuService: MenuService
    ) {
        this.subHeaderService.title = 'User Profile';
        
        this.userService.currentUser.subscribe((data) => {
            this.user = data;
        });
    }

    public onEditBtnClick() {

        this._initialValues = this.userDetailsForm.value;
        this.editMode = true;

        if (this.editMode) {
            this._enableAllInputs();
        } else {
            this._disableAllInputs();
        }
    }

    private _disableAllInputs() {
        // tslint:disable-next-line: forin
        for (const control in this.formGroup.controls) {
            this.formGroup.controls[control].disable();
        }

        // tslint:disable-next-line: forin
        for (const control2 in this.userDetailsForm.controls) {
            this.userDetailsForm.controls[control2].disable();
        }
    }

    private _enableAllInputs() {
        // tslint:disable-next-line: forin
        for (const control in this.formGroup.controls) {
            this.formGroup.controls[control].enable();
        }

        // tslint:disable-next-line: forin
        for (const control2 in this.userDetailsForm.controls) {
            this.userDetailsForm.controls[control2].enable();
        }
    }

    onValChange(e: MatSlideToggleChange, operation?: string, permission?: PermissionsEnum) {
        // this._user.permissions.find((item) => (item.permissionId = 'dev'));
        // debugger;
        // console.log(permission);
        // console.log(operation);

        this.userService.setPermission(this.user.id, permission, e.checked, operation);
        this.menuService.refreshMenu();

        if (permission === PermissionsEnum.admin && operation === PermissionsOperationEnum.read && this.user.id === this.userService.selectUserId) {
            // To re-test the router guard and redirect to error page if the current user don't have access anymore
            this.redirectTo(this._router.url);
        }
    }

    redirectTo(uri) {
        this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => this._router.navigate([uri]));
    }

    onFormSubmit(formValue: any) {
        // console.log(this.formGroup.updateValueAndValidity())
        console.log(this.formGroup.invalid);
        this.menuService.refreshMenu();

        if (this.formGroup.invalid) {
            return;
        }

        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formGroup.value))
    }

    public onCancel(){
        this.userDetailsForm.reset(this._initialValues);
        //Or
        this.userDetailsForm.markAsPristine();
        //Or
        this.userDetailsForm.markAsTouched();
        this._disableAllInputs();
        
        this.editMode = false;
        // this.setForm();
        // this.createInfoForm();
    }

    public onSubmit(e: FormGroup ) {
        // debugger;
        console.log(e);

        const user = this.userService.getUserById(this.user.id);

        this.user.firstName = e.controls.firstName.value;
        this.user.lastName = e.controls.lastName.value;
        this.user.username = e.controls.username.value;
        this.user.email = e.controls.email.value;

        this.userService.saveLocal();
        
        this._disableAllInputs();
        
        this.editMode = false;
        // e.updateValueAndValidity();
        
    }

    createItem(permission: PermissionsEnum) {
        return this.formBuilder.group({
            list: this.userService.getPermission(this.user.id, permission).list,
            create: this.userService.getPermission(this.user.id, permission).create,
            read: this.userService.getPermission(this.user.id, permission).read,
            update: this.userService.getPermission(this.user.id, permission).update,
            delete: this.userService.getPermission(this.user.id, permission).delete,
        });
    }

    public createInfoForm(){

        this.userDetailsForm = new FormGroup({
            firstName: new FormControl(this.user.firstName, [Validators.required, Validators.minLength(2)]),
            lastName: new FormControl(this.user.lastName, [Validators.required, Validators.minLength(2)]),
            username: new FormControl(this.user.username, [Validators.required, Validators.minLength(2)]),
            email: new FormControl(this.user.email, [Validators.required, Validators.email]),
        });
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            // console.log(params.get('id'));
            this.user = this.userService.getUserById(params.get('id'));
            // console.log(this.userService.getPermission(this.user.id, permissions.client))
            // console.log(this._user.permissions.findIndex(i => i.permissionId === permissions.client));
            // this.formBuilder.array.push(new FormControl());

            // this.formGroup = this.formBuilder.group({});
            // this.userDetailsForm = this.formBuilder.group({
            //     firstName: ['JSN']
            //     // admin: this.formBuilder.array([this.createItem(PermissionsEnum.admin)]),
            //     // dev: this.formBuilder.array([this.createItem(PermissionsEnum.dev)]),
            // });
            this.createInfoForm();

            this.myFormArray = new FormArray([]);
            this.myFormArray.push(new FormControl());

            this.formGroup = this.formBuilder.group({
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                username: this.user.username,
                email: [this.user.email, [Validators.required, Validators.email]],

                assentia: this.userService.getPermission(this.user.id, PermissionsEnum.assentia).read,
                dsl: this.userService.getPermission(this.user.id, PermissionsEnum.dsl).read,
                scip: this.userService.getPermission(this.user.id, PermissionsEnum.scip).read,
                supoPlus: this.userService.getPermission(this.user.id, PermissionsEnum.supoPlus).read,
                supplierMatching: this.userService.getPermission(this.user.id, PermissionsEnum.supplierMatching).read,
                supplierNetwork: this.userService.getPermission(this.user.id, PermissionsEnum.supplierNetwork).read,

                clientList: this.userService.getPermission(this.user.id, PermissionsEnum.client).list,
                clientCreate: this.userService.getPermission(this.user.id, PermissionsEnum.client).create,
                clientRead: this.userService.getPermission(this.user.id, PermissionsEnum.client).read,
                clientUpdate: this.userService.getPermission(this.user.id, PermissionsEnum.client).update,
                clientDelete: this.userService.getPermission(this.user.id, PermissionsEnum.client).delete,

                devList: this.userService.getPermission(this.user.id, PermissionsEnum.dev).list,
                devCreate: this.userService.getPermission(this.user.id, PermissionsEnum.dev).create,
                devRead: this.userService.getPermission(this.user.id, PermissionsEnum.dev).read,
                devUpdate: this.userService.getPermission(this.user.id, PermissionsEnum.dev).update,
                devDelete: this.userService.getPermission(this.user.id, PermissionsEnum.dev).delete,

                adminList: this.userService.getPermission(this.user.id, PermissionsEnum.admin).list,
                adminCreate: this.userService.getPermission(this.user.id, PermissionsEnum.admin).create,
                adminRead: this.userService.getPermission(this.user.id, PermissionsEnum.admin).read,
                adminUpdate: this.userService.getPermission(this.user.id, PermissionsEnum.admin).update,
                adminDelete: this.userService.getPermission(this.user.id, PermissionsEnum.admin).delete,

                profileList: this.userService.getPermission(this.user.id, PermissionsEnum.profile).list,
                profileCreate: this.userService.getPermission(this.user.id, PermissionsEnum.profile).create,
                profileRead: this.userService.getPermission(this.user.id, PermissionsEnum.profile).read,
                profileUpdate: this.userService.getPermission(this.user.id, PermissionsEnum.profile).update,
                profileDelete: this.userService.getPermission(this.user.id, PermissionsEnum.profile).delete,

                settingsList: this.userService.getPermission(this.user.id, PermissionsEnum.settings).list,
                settingsCreate: this.userService.getPermission(this.user.id, PermissionsEnum.settings).create,
                settingsRead: this.userService.getPermission(this.user.id, PermissionsEnum.settings).read,
                settingsUpdate: this.userService.getPermission(this.user.id, PermissionsEnum.settings).update,
                settingsDelete: this.userService.getPermission(this.user.id, PermissionsEnum.settings).delete,

                authServiceList: this.userService.getPermission(this.user.id, PermissionsEnum.authService).list,
                authServiceCreate: this.userService.getPermission(this.user.id, PermissionsEnum.authService).create,
                authServiceRead: this.userService.getPermission(this.user.id, PermissionsEnum.authService).read,
                authServiceUpdate: this.userService.getPermission(this.user.id, PermissionsEnum.authService).update,
                authServiceDelete: this.userService.getPermission(this.user.id, PermissionsEnum.authService).delete,
            });

            // this.userInfoFormGroup = this.formBuilder.group({firstName: 'test'});
            this._disableAllInputs();
        });
    }
}
