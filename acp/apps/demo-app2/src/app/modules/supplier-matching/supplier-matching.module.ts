import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierMatchingRoutingModule } from './supplier-matching-routing.module';
import { SupplierMatchingComponent } from './supplier-matching.component';


@NgModule({
  declarations: [SupplierMatchingComponent],
  imports: [
    CommonModule,
    SupplierMatchingRoutingModule
  ]
})
export class SupplierMatchingModule { }
