import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {
	TranslateModule,
	TranslateLoader,
	TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
	return new TranslateHttpLoader(
		httpClient,
		'./assets/i18n/assentia/',
		'.json'
	);
}

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
			isolate: false,
			extend: true
		}),
	],
	exports: [TranslateModule],
})
export class SharedModule {
	
	// constructor(private translate: TranslateService) {
	// 	translate.addLangs(['en', 'fr']);
	// 	translate.setDefaultLang('en');

	// 	let browserLang = translate.getBrowserLang();
	// 	translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
	// }

	static forRoot(): ModuleWithProviders<NgModule> {
	  return {
	    ngModule: SharedModule,
	    providers: []
	  }
	}
}
