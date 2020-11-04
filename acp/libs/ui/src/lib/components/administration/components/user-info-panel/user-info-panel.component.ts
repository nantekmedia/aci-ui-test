import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PermissionsEnum, PermissionsOperationEnum, User, UserService } from '@acp/ui';

@Component({
    selector: 'acp-user-info-panel',
    templateUrl: './user-info-panel.component.html',
    styleUrls: ['./user-info-panel.component.scss'],
})
export class UserInfoPanelComponent implements OnInit {
	public userDetailsForm: FormGroup;	
	public editMode = false;
    public PermissionsEnum = PermissionsEnum;
    public PermissionsOperationEnum = PermissionsOperationEnum;
	
    public  user: User;
	private _initialValues;
	
    constructor(private _route: ActivatedRoute, public formBuilder: FormBuilder, public userService: UserService) {}

    public ngOnInit(): void {
        this._route.paramMap.subscribe((params) => {
			console.log(params);
			this.user = this.userService.getUserById(params.get('id'));
			this.createInfoForm();
        });
	}
	
	
    public createInfoForm(){

        this.userDetailsForm = new FormGroup({
            firstName: new FormControl(this.user.firstName, [Validators.required, Validators.minLength(2)]),
            lastName: new FormControl(this.user.lastName, [Validators.required, Validators.minLength(2)]),
            username: new FormControl(this.user.username, [Validators.required, Validators.minLength(2)]),
            email: new FormControl(this.user.email, [Validators.required, Validators.email]),
		});		
			
		this._disableAllInputs();
	}
	
    public onSubmit(e: FormGroup ) {
        // debugger;
        // console.log(e);
		const user = this.userService.getUserById(this.user.id);
		
        this.user.firstName = e.controls.firstName.value;
        this.user.lastName = e.controls.lastName.value;
        this.user.username = e.controls.username.value;
        this.user.email = e.controls.email.value;

        this.userService.saveLocal();        
        this._disableAllInputs();        
        this.editMode = false;
        
    }
	
    public onCancel(){
        this.userDetailsForm.reset(this._initialValues);
        this._disableAllInputs();        
        this.editMode = false;
	}
	
    public onEditBtnClick() {
        this._initialValues = this.userDetailsForm.value;
        this.editMode = true;
		this._enableAllInputs();
    }

    private _disableAllInputs() {

        // tslint:disable-next-line: forin
        for (const control2 in this.userDetailsForm.controls) {
            this.userDetailsForm.controls[control2].disable();
        }
    }

    private _enableAllInputs() {

        // tslint:disable-next-line: forin
        for (const control2 in this.userDetailsForm.controls) {
            this.userDetailsForm.controls[control2].enable();
        }
	}
	
	
}
