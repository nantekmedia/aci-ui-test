import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutBootstrapComponent } from './layout-bootstrap.component';

const routes: Routes = [{ path: '', component: LayoutBootstrapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutBootstrapRoutingModule { }
