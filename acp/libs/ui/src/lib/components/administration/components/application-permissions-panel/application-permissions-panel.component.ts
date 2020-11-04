import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'acp-ui';
import { HeaderSubService } from 'acp-ui';
import { User, PermissionsEnum, PermissionsOperationEnum, UserService } from 'acp-ui';

@Component({
    selector: 'acp-application-permissions-panel',
    templateUrl: './application-permissions-panel.component.html',
    styleUrls: ['./application-permissions-panel.component.scss'],
})
export class ApplicationPermissionsPanelComponent implements OnInit {
    public formGroup: FormGroup;
    public user: User;
    public PermissionsEnum = PermissionsEnum;
    public PermissionsOperationEnum = PermissionsOperationEnum;
    public editMode = false;
    private _initialValues;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        public subHeaderService: HeaderSubService,
        public formBuilder: FormBuilder,
        public userService: UserService,
        public menuService: MenuService
    ) {
        // this.userService.currentUser.subscribe((data) => {
        //     this.user = data;
        //     console.log(this.user);
        // });
    }

    ngOnInit(): void {
        this._route.paramMap.subscribe((params) => {
			this.user = this.userService.getUserById(params.get('id'));
						
			this.formGroup = this.formBuilder.group({
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

            this._disableAllInputs();
        });
    }

    public onEditBtnClick() {
        this._initialValues = this.formGroup.value;
        this.editMode = !this.editMode;

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
    }

    private _enableAllInputs() {
        // tslint:disable-next-line: forin
        for (const control in this.formGroup.controls) {
            this.formGroup.controls[control].enable();
        }
    }

    onValChange(e: MatSlideToggleChange, operation?: string, permission?: PermissionsEnum) {
        this.userService.setPermission(this.user.id, permission, e.checked, operation);
        this.menuService.refreshMenu();
        this.userService.saveLocal();
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

    public onCancel() {
        this.formGroup.reset(this._initialValues);
        //Or
        this.formGroup.markAsPristine();
        //Or
        this.formGroup.markAsTouched();
        this._disableAllInputs();

        this.editMode = false;
        // this.setForm();
        // this.createInfoForm();
    }
}
