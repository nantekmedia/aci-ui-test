import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutMaterialRoutingModule } from './layout-material-routing.module';
import { LayoutMaterialComponent } from './layout-material.component';
import { MaterialModule } from 'acp-ui';
import { FormMaterialComponent } from '../form-material/form-material.component';

import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [LayoutMaterialComponent, FormMaterialComponent],
  imports: [
    CommonModule,
    LayoutMaterialRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class LayoutMaterialModule { }
