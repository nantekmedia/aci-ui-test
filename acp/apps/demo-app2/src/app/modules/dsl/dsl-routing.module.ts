import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DslComponent } from './dsl.component';

const routes: Routes = [{ path: '', component: DslComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DslRoutingModule { }
