import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContainerComponent } from './app-container.component';
import { ErrorPageComponent } from 'acp-ui';
import { AuthGuard } from 'acp-ui';
import { PermissionsGuard } from 'acp-ui';
import { PermissionsEnum, PermissionsOperationEnum } from 'acp-ui';

const routes: Routes = [
    // // { path: 'error', component: ErrorPageComponent },
    {
        path: 'auth',
        loadChildren: () =>
            import(
                '../../../../libs/ui/src/lib/components/authentification'
            ).then((m) => m.AuthentificationModule),
    },
    {
        path: 'acp',
        canActivate: [AuthGuard],
        component: AppContainerComponent,
        children: [
            // App Modules
            { path: 'error', component: ErrorPageComponent },
            {
                path: 'ui-demos',
                canActivate: [PermissionsGuard],
                data: { permissions: PermissionsEnum.dev },
                loadChildren: () =>
                    import('./modules/ui-demos/ui-demos.module').then(
                        (m) => m.UiDemosModule
                    ),
            },
            {
                path: 'components',
                canActivate: [PermissionsGuard],
                data: { permissions: PermissionsEnum.dev },
                loadChildren: () =>
                    import('./modules/components/components.module').then(
                        (m) => m.ComponentsModule
                    ),
            },
            {
                path: 'supplier-network',
                canActivate: [PermissionsGuard],
                data: { permissions: PermissionsEnum.supplierNetwork },
                loadChildren: () =>
                    import(
                        './modules/supplier-network/supplier-network.module'
                    ).then((m) => m.SupplierNetworkModule),
            },
            {
                path: 'dsl',
                canActivate: [PermissionsGuard],
                data: { permissions: PermissionsEnum.dsl },
                loadChildren: () =>
                    import('./modules/dsl/dsl.module').then((m) => m.DslModule),
            },
            {
                path: 'scip',
                canActivate: [PermissionsGuard],
                data: { permissions: PermissionsEnum.scip },
                loadChildren: () =>
                    import('./modules/scip/scip.module').then(
                        (m) => m.ScipModule
                    ),
            },
            {
                path: 'supplier-matching',
                canActivate: [PermissionsGuard],
                data: { permissions: PermissionsEnum.supplierMatching },
                loadChildren: () =>
                    import(
                        './modules/supplier-matching/supplier-matching.module'
                    ).then((m) => m.SupplierMatchingModule),
            },
            {
                path: 'assentia',
                canActivate: [PermissionsGuard],
                data: { permissions: PermissionsEnum.assentia },
                loadChildren: () =>
                    import(
                        './modules/assentia/assentia.module'
                    ).then((m) => m.AssentiaModule),
            },
            {
                path: 'supo-plus',
                canActivate: [PermissionsGuard],
                data: { permissions: PermissionsEnum.supoPlus },
                loadChildren: () =>
                    import('./modules/supo-plus/supo-plus.module').then(
                        (m) => m.SupoPlusModule
                    ),
            },
            // Lib Modules
            {
                path: 'libs',
                loadChildren: () =>
                    import('../../../../libs/ui/src/lib/ui.module').then(
                        (m) => m.UiModule
                    ),
            },
            {
                path: 'admin',
                canActivate: [PermissionsGuard],
                data: { permissions: PermissionsEnum.admin, permissionOperation: PermissionsOperationEnum.read },
                loadChildren: () =>
                    import(
                        '../../../../libs/ui/src/lib/components/administration/administration.module'
                    ).then((m) => m.AdministrationModule),
            },
            {
                path: 'profile',
                canActivate: [PermissionsGuard],
                data: { permissions: PermissionsEnum.profile },
                loadChildren: () =>
                    import(
                        '../../../../libs/ui/src/lib/components/profile/profile.module'
                    ).then((m) => m.ProfileModule),
            },
            {
                path: 'settings',
                canActivate: [PermissionsGuard],
                data: { permissions: PermissionsEnum.settings },
                loadChildren: () =>
                    import(
                        '../../../../libs/ui/src/lib/components/settings/settings.module'
                    ).then((m) => m.SettingsModule),
            },
        ],
    },
    // // { path: 'assentia', loadChildren: () => import('./modules/assentia/assentia.module').then(m => m.AssentiaModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
