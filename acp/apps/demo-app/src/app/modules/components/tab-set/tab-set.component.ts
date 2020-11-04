import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
// import { LocalizationService } from 'libs/ui/src/lib/services/localization/localization.service';
// import { LocalizationService } from 'libs/ui/src/lib/services/localization/localization.service';
import { LocalizationService } from 'acp-ui';
import { MenuService } from 'acp-ui';
import { HeaderSubService } from 'acp-ui';

import { ApiService } from '../../../services/api.service';
// import { ApiService } from '../.'

interface LooseObject {
    [key: string]: string;
}

@Component({
    selector: 'acp-tab-set',
    templateUrl: './tab-set.component.html',
    styleUrls: ['./tab-set.component.scss'],
})
export class TabSetComponent implements OnInit {
    options: FormGroup;
    hideRequiredControl = new FormControl(false);
    floatLabelControl = new FormControl('auto');

    private obj: LooseObject = {};

    constructor(
        fb: FormBuilder,
        private _translate: TranslateService,
        private _local: LocalizationService,
        private api: ApiService,
        private _subHeaderService: HeaderSubService
    ) {
        this.options = fb.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
    }

    public ngOnInit() {
        setTimeout(() => {
            this._subHeaderService.title = 'UI Components - Overview';
        }, 1);

        setTimeout(() => {
            this.api
                .put({ Name: 'test', Price: 'ererere', Location: 'sdssdsdsd' })
                .subscribe((response) => {
                    this.api.getData().subscribe((data) => {
                        // console.log(data);
                    });
                    // console.log(response);
                });
            // this.api.get('Cheese').subscribe((data) => {console.log(data) });
        }, 1000);

        setTimeout(() => {
            this.api
                .patch({ Name: 'JSN', Price: '10.00', Location: 'Ottawa' })
                .subscribe((response) => {
                    this.api.getData().subscribe((data) => {
                        // console.log(data);
                    });
                    // console.log(response);
                });
            // this.api.get('Cheese').subscribe((data) => {console.log(data) });
        }, 2000);
    }

    public switchLang() {
        // this._translate.currentLang
        // this._translate.use('en');
        this._translate.currentLang === 'en'
            ? this._translate.use('fr')
            : this._translate.use('en');
        // console.log(this._local.test);
    }
}
