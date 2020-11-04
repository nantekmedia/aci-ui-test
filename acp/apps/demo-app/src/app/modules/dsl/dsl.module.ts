import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DslRoutingModule } from './dsl-routing.module';
import { DslComponent } from './dsl.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, from } from 'rxjs';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, '../../../assets/i18n/dsl/', '.json');
}


@NgModule({
    declarations: [DslComponent],
    imports: [
        CommonModule,
        DslRoutingModule,
        TranslateModule,
        // TranslateModule.forChild({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: HttpLoaderFactory,
        //         deps: [HttpClient],
        //     },
        //     isolate: true,
        // }),
    ],
    // providers: [TranslateService]
})
export class DslModule {}
