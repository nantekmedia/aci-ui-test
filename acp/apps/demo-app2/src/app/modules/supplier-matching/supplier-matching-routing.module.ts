import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierMatchingComponent } from './supplier-matching.component';

const routes: Routes = [{ path: '', component: SupplierMatchingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierMatchingRoutingModule { }
