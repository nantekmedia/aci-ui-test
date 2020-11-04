import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationRoutingModule } from './services/authentification-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function UIHttpLoaderFactory(httpClient: HttpClient) {
	// return new TranslateHttpLoader(httpClient);
	return new TranslateHttpLoader(httpClient, './assets/i18n/ui/', '.json');
}

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		AuthentificationRoutingModule,
		TranslateModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: UIHttpLoaderFactory,
				deps: [HttpClient],
			},
			isolate: true,
			extend: true,
		}),
		// AuthenticationService
	],
	//   exports: [],
	exports: [LoginComponent],
})
export class AuthentificationModule { }
