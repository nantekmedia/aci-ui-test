import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef,
    ElementRef,
    OnInit,
} from '@angular/core';
import { UserService } from '../user/user.service';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[hasPermission2]',
})
export class HasPermissionDirective2 implements OnInit {
    private currentUser;
    private permissions = [];
    private operations = [];
    private logicalOp = 'AND';
    private isHidden = true;

    constructor(
        private element: ElementRef,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.userService.currentUser.subscribe((user) => {
            this.currentUser = user;
            this.updateView();
        });
    }

    @Input()
    set hasPermission2(val) {
        this.permissions = val;
        // this.operations = operations;
        this.updateView();
    }

    @Input()
    set hasPermissionOp(permop) {
        this.logicalOp = permop;
        this.updateView();
    }

    private updateView() {
        if (this.checkPermission()) {
            if (this.isHidden) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.isHidden = false;
            }
        } else {
            this.isHidden = true;
            this.viewContainer.clear();
        }
    }

    private checkPermission() {
        let hasPermission = false;
        
        if(this.permissions[0] === undefined)
        { 
            return true; 
        }

        if (this.currentUser && this.currentUser.permissions) {
            for (const checkPermission of this.permissions) {
                const permissionFound = this.currentUser.permissions.find(
                    (x) => x.permissionId.toUpperCase() === checkPermission.toUpperCase()
                );
                
                if (permissionFound) {
                    if(this.permissions[1] !== undefined)
                    {                        
                        const temp = this.permissions[1]
                        hasPermission = permissionFound[temp];
                    }
                    else {
                        hasPermission = permissionFound.read;
                    }
                    
                }
            }
        }
        return hasPermission;
    }
}
