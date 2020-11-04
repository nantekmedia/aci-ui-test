import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { TabSetComponent } from './tab-set/tab-set.component';

const routes: Routes = [{ path: '', component: ComponentsComponent }, { path: 'tab-set', component: TabSetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
