import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiDemosComponent } from './ui-demos.component';

const routes: Routes = [
    { path: '', component: UiDemosComponent },
    {
        path: 'layout-material',
        loadChildren: () =>
            import('./layout-material/layout-material.module').then(
                (m) => m.LayoutMaterialModule
            ),
    },
    { path: 'layout-bootstrap', loadChildren: () => import('./layout-bootstrap/layout-bootstrap.module').then(m => m.LayoutBootstrapModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UiDemosRoutingModule {}
