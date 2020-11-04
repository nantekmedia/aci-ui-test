import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupoPlusComponent } from './supo-plus.component';

const routes: Routes = [{ path: '', component: SupoPlusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupoPlusRoutingModule { }
