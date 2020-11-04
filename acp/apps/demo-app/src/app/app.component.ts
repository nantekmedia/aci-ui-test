
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'acp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'material-demo';  
  
  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private _breakpointObserver: BreakpointObserver, private _translate: TranslateService, private api: ApiService) {
        _translate.addLangs(['en', 'fr']);
        // this language will be used as a fallback when a translation isn't found in the current language 
        _translate.setDefaultLang('en');
         // the lang to use, if the lang isn't available, it will use the current loader to get them
        _translate.use('en');
    }

}