import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierNetworkRoutingModule } from './supplier-network-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SupplierNetworkRoutingModule,
    TranslateModule,
    PagesModule,
    ComponentsModule
  ]
})
export class SupplierNetworkModule { }
