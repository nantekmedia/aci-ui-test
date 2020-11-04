import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderSubService } from 'acp-ui';
@Component({
  selector: 'acp-dsl',
  templateUrl: './dsl.component.html',
  styleUrls: ['./dsl.component.scss']
})
export class DslComponent implements OnInit {

  constructor(private _translate: TranslateService, 
    public _subHeaderService: HeaderSubService,
    private _translateService: TranslateService) { 
    // this._translate.setDefaultLang('en');  
    // this._translate.use('fr');
    
  //   this._translateService.get(['']).subscribe((translations) => {
  //     this._subHeaderService.title = this._translateService.instant('APP-MODULES.DSL');
  // });
    this._translate.onLangChange.subscribe((data) => {
      // console.log(data.lang);

      this._translate.use(data.lang)
  });
  }

  ngOnInit(): void {    
    setTimeout(() => {this._subHeaderService.title = 'DSL';}, 1)
  }

}
