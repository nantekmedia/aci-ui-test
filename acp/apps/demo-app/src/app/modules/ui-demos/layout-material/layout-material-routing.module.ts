import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutMaterialComponent } from './layout-material.component';

const routes: Routes = [{ path: '', component: LayoutMaterialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutMaterialRoutingModule { }
