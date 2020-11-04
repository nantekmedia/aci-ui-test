import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssentiaRoutingModule } from './assentia-routing.module';
import { AssentiaComponent } from './assentia.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SharedModule } from '../../shared.module';
import { SharedLazyModule } from '../../shared-lazy.module';

// AoT requires an exported function for factories
export function AssentiaHttpLoaderFactory(httpClient: HttpClient) {
	// return new TranslateHttpLoader(httpClient);
	return new TranslateHttpLoader(httpClient, './assets/i18n/assentia/', '.json');
}

@NgModule({
	declarations: [AssentiaComponent],
	imports: [
		CommonModule,
		AssentiaRoutingModule,
		TranslateModule.forChild(),
		// SharedModule,		
		// SharedModule,
		// TranslateModule.forChild({
		// 	loader: {
		// 		provide: TranslateLoader,
		// 		useFactory: AssentiaHttpLoaderFactory,
		// 		deps: [HttpClient],				
		// 	},
		// 	// isolate: false,
		// 	extend: true,
		// 	// useDefaultLang: true
		// }),
	],
	// exports: [TranslateModule]
})
export class AssentiaModule { 
	static forRoot(): ModuleWithProviders<NgModule> {
		return {
		  ngModule: AssentiaModule,
		  providers: []
		}
	  }
}
