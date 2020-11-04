import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScipComponent } from './scip.component';

const routes: Routes = [{ path: '', component: ScipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScipRoutingModule { }
