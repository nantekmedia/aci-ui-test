import { Component, OnInit } from '@angular/core';
import { UserService } from '@acp/ui';
// import { UserService } from '@user';
// import { UserService } from 'user/index';
// import { UserService } from 'user';
import { HeaderSubService } from 'acp-ui';
// import { UserService } from 'index';
// import { UserService } from '';
// import { UserService } from '';
// tslint:disable-next-line: nx-enforce-module-boundaries
// import { UserService } from 'libs/ui/src/lib/services/user';
// import { UserService } from '@user/user/user.service';
// import { UserService } from '@user/lib/services/user/user.service';


declare const require: any; // Important
// Load Chance
const Chance = require('chance');

// Instantiate Chance so it can be used
const chance = new Chance();

@Component({
    selector: 'acp-users-list-page',
    templateUrl: './users-list-page.component.html',
    styleUrls: ['./users-list-page.component.scss'],
})
export class UsersListPageComponent implements OnInit {
    // Use Chance here.
    public usersList;

    constructor(
        public subHeaderService: HeaderSubService,
        public userService: UserService
    ) {
        this.subHeaderService.title = 'Users List';
    }

    ngOnInit(): void {}
}
