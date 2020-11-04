import { Component, OnInit } from '@angular/core';
import { HeaderSubService } from 'acp-ui';

@Component({
    selector: 'acp-data-management-page',
    templateUrl: './data-management-page.component.html',
    styleUrls: ['./data-management-page.component.scss'],
})
export class DataManagementPageComponent implements OnInit {
    constructor(public _subHeaderService: HeaderSubService) {}

    ngOnInit(): void {
        setTimeout(() => {
            this._subHeaderService.title = 'HOME.TITLE';
        }, 1);
    }
}
