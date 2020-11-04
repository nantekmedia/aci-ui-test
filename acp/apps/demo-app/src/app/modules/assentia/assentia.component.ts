import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { translate } from '@angular/localize/src/utils';
import { HeaderSubService } from 'acp-ui';

@Component({
    selector: 'acp-assentia',
    templateUrl: './assentia.component.html',
    styleUrls: ['./assentia.component.scss'],
})
export class AssentiaComponent implements OnInit {
    constructor(
        public _subHeaderService: HeaderSubService,
        private _translateService: TranslateService
    ) {}

    ngOnInit(): void {      
      setTimeout(() => {this._subHeaderService.title = 'Assentia';}, 1)
    }
}
