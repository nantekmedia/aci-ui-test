import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupoPlusRoutingModule } from './supo-plus-routing.module';
import { SupoPlusComponent } from './supo-plus.component';


@NgModule({
  declarations: [SupoPlusComponent],
  imports: [
    CommonModule,
    SupoPlusRoutingModule
  ]
})
export class SupoPlusModule { }
