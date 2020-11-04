import { Component, OnInit } from '@angular/core';
import { HeaderSubService } from 'acp-ui';

@Component({
    selector: 'acp-layout-bootstrap',
    templateUrl: './layout-bootstrap.component.html',
    styleUrls: ['./layout-bootstrap.component.scss'],
})
export class LayoutBootstrapComponent implements OnInit {
    constructor(private _subHeaderService: HeaderSubService) {}

    ngOnInit(): void {
        setTimeout(() => {
            this._subHeaderService.title = 'UI Layout - Bootstrap';
        }, 1);
    }
}
