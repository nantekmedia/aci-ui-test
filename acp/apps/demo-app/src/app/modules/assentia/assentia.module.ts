import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssentiaRoutingModule } from './assentia-routing.module';
import { AssentiaComponent } from './assentia.component';


@NgModule({
  declarations: [AssentiaComponent],
  imports: [
    CommonModule,
    AssentiaRoutingModule
  ]
})
export class AssentiaModule { }
