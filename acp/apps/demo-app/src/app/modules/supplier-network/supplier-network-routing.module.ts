import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataManagementPageComponent } from './pages/data-management-page/data-management-page.component';
import { UserManagementPageComponent } from './pages/user-management-page/user-management-page.component';

const routes: Routes = [
    { path: '', component: DataManagementPageComponent },
    { path: 'data-management', component: DataManagementPageComponent },
    { path: 'user-management', component: UserManagementPageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SupplierNetworkRoutingModule {}
