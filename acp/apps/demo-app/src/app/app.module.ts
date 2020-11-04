import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { UiModule } from 'acp-ui';
import { MaterialModule } from 'acp-ui';
import { NgbModule } from 'acp-ui';
import { AppContainerComponent } from './app-container.component';


// import { fakeBackendProvider } from './fakeBackend';
// import { MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule } from '@angular/material';

// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatCheckboxModule} from '@angular/material/checkbox';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [AppComponent, AppContainerComponent],
    imports: [
        MaterialModule,
        UiModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },     
            // isolate: true
        }),
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        NgbModule,
        // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    // providers: [fakeBackendProvider],
    bootstrap: [AppComponent],
    exports: [],
})
export class AppModule {}
