import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './components/layout/layout.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function UIHttpLoaderFactory(httpClient: HttpClient) {
    // return new TranslateHttpLoader(httpClient);
    return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        RouterModule.forChild([
            {
                path: 'lib/ui/components',
                loadChildren: () =>
                    import('./components/components.module').then(
                        (m) => m.ComponentsModule
                    ),
            },
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
        ]),
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: UIHttpLoaderFactory,
                deps: [HttpClient],
            },
            isolate: true,
            extend: false
        }),
        HttpClientModule,
        // AuthentificationModule,
    ],
    exports: [
        ComponentsModule,
        MaterialModule,
        LayoutModule,
        // AuthentificationModule,
    ],
})
export class UiModule {}
