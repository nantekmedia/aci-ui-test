import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { translate } from '@angular/localize/src/utils';
import { HeaderSubService, UserService } from 'acp-ui';

@Component({
    selector: 'acp-assentia',
    templateUrl: './assentia.component.html',
    styleUrls: ['./assentia.component.scss'],
})
export class AssentiaComponent implements OnInit {
    constructor(
        public _subHeaderService: HeaderSubService,
        public _translateService: TranslateService,
        private _userService: UserService
    ) {
        // this._translateService.use('fr');
        // this language will be used as a fallback when a translation isn't found in the current language 
        // _translateService.setDefaultLang('fr');
         // the lang to use, if the lang isn't available, it will use the current loader to get them
        //  _translateService.use('fr');
         
        this._translateService.onLangChange.subscribe((lang) => {
                // _translateService.use(lang.lang);
                console.log(lang)
            }
        );
    }

    ngOnInit(): void {      
        
        // this._translateService.addLangs(['en', 'fr']);
        // this._translateService.use('fr');
    //   setTimeout(() => {
    //       this._subHeaderService.title = 'Assentia';
    //     //   this._translateService.use('en');
          
    //       this._translateService.use('fr');
    //     }
    //     , 1000);
    }
}
