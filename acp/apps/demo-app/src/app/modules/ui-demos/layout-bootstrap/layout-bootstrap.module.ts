import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutBootstrapRoutingModule } from './layout-bootstrap-routing.module';
import { LayoutBootstrapComponent } from './layout-bootstrap.component';
import { MaterialModule } from 'acp-ui';


@NgModule({
  declarations: [LayoutBootstrapComponent],
  imports: [
    CommonModule,
    LayoutBootstrapRoutingModule,
    MaterialModule
  ]
})
export class LayoutBootstrapModule { }
