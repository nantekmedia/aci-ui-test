import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScipRoutingModule } from './scip-routing.module';
import { ScipComponent } from './scip.component';


@NgModule({
  declarations: [ScipComponent],
  imports: [
    CommonModule,
    ScipRoutingModule
  ]
})
export class ScipModule { }
