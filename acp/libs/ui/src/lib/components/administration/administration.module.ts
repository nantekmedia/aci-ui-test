import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { UiModule } from 'acp-ui';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoPanelComponent } from './components/user-info-panel/user-info-panel.component';
import { ModulePermissionsPanelComponent } from './components/module-permissions-panel/module-permissions-panel.component';
import { ApplicationPermissionsPanelComponent } from './components/application-permissions-panel/application-permissions-panel.component';

@NgModule({
    declarations: [AdministrationComponent, UsersListPageComponent, UserDetailsPageComponent, UserInfoPanelComponent, ModulePermissionsPanelComponent, ApplicationPermissionsPanelComponent],
    imports: [CommonModule, AdministrationRoutingModule, UiModule, FormsModule, ReactiveFormsModule],
})
export class AdministrationModule {}
