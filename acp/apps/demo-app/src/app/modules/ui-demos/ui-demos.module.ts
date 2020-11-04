import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiDemosRoutingModule } from './ui-demos-routing.module';
import { UiDemosComponent } from './ui-demos.component';


@NgModule({
  declarations: [UiDemosComponent],
  imports: [
    CommonModule,
    UiDemosRoutingModule
  ]
})
export class UiDemosModule { }
