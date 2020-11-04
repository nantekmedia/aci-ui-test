import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssentiaComponent } from './assentia.component';

const routes: Routes = [{ path: '', component: AssentiaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssentiaRoutingModule { }
