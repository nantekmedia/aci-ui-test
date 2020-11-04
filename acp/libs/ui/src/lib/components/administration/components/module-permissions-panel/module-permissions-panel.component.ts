import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'acp-ui';
// import { PermissionsEnum, PermissionsOperationEnum, User, UserService } from 'libs/ui/src/lib/services/user/user.service';
import { PermissionsEnum, PermissionsOperationEnum, User, UserService } from '@acp/ui';

@Component({
    selector: 'acp-module-permissions-panel',
    templateUrl: './module-permissions-panel.component.html',
    styleUrls: ['./module-permissions-panel.component.scss'],
})
export class ModulePermissionsPanelComponent implements OnInit {
    public formGroup: FormGroup;
    public user: User;
    public PermissionsEnum = PermissionsEnum;
    public PermissionsOperationEnum = PermissionsOperationEnum;
    public editMode = false;

    private _initialValues;

    constructor(private _router: Router, private _route: ActivatedRoute, public userService: UserService, public formBuilder: FormBuilder, public menuService: MenuService) {}

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

    ngOnInit(): void {
        this._route.paramMap.subscribe((params) => {
            this.user = this.userService.getUserById(params.get('id'));

            this.formGroup = this.formBuilder.group({
                assentia: this.userService.getPermission(this.user.id, PermissionsEnum.assentia).read,
                dsl: this.userService.getPermission(this.user.id, PermissionsEnum.dsl).read,
                scip: this.userService.getPermission(this.user.id, PermissionsEnum.scip).read,
                supoPlus: this.userService.getPermission(this.user.id, PermissionsEnum.supoPlus).read,
                supplierMatching: this.userService.getPermission(this.user.id, PermissionsEnum.supplierMatching).read,
                supplierNetwork: this.userService.getPermission(this.user.id, PermissionsEnum.supplierNetwork).read,
            });

            this._disableAllInputs();
        });
    }

    onValChange(e: MatSlideToggleChange, operation?: string, permission?: PermissionsEnum) {

        this.userService.setPermission(this.user.id, permission, e.checked, operation);
        this.menuService.refreshMenu();

        if (permission === PermissionsEnum.admin && operation === PermissionsOperationEnum.read && this.user.id === this.userService.selectUserId) {
            // To re-test the router guard and redirect to error page if the current user don't have access anymore
            this._redirectTo(this._router.url);
        }
        
        this.userService.saveLocal();
    }

    public onCancelBtnClick() {
        this.formGroup.reset(this._initialValues);
        this._disableAllInputs();

        this.editMode = false;
    }

    public onFormSubmit(formValue: any) {
        this.menuService.refreshMenu();

        if (this.formGroup.invalid) {
            return;
        }
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
    
    private _redirectTo(uri) {
      this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => this._router.navigate([uri]));
  }
}
