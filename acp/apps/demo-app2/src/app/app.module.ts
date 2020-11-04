import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppContainerComponent } from './app-container.component';

import { UiModule } from 'acp-ui';
import { MaterialModule } from 'acp-ui';
import { NgbModule } from 'acp-ui';
import { AssentiaModule } from './modules/assentia/assentia.module';
import { SharedModule } from './shared.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

// AoT requires an exported function for factories
export function AssentiaHttpLoaderFactory(httpClient: HttpClient) {
	// return new TranslateHttpLoader(httpClient);
	return new TranslateHttpLoader(httpClient, './assets/i18n/assentia/', '.json');
}
@NgModule({
    declarations: [AppComponent, AppContainerComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        NgbModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule, 
        // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),       
        MaterialModule,
        UiModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },                 
            isolate: false,
            extend: true
        }),
        SharedModule.forRoot()
        // AssentiaModule.forRoot()
    ],
    // providers: [fakeBackendProvider],
    bootstrap: [AppComponent],    
	exports: [TranslateModule]
})
export class AppModule {}
