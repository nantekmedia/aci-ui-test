import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationComponent } from './administration.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';

const routes: Routes = [
  { path: '', component: AdministrationComponent },
  { path: 'users', component: UsersListPageComponent },
  { path: 'user/:id', component: UserDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
