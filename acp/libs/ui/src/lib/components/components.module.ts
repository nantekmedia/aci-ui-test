import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material.module';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LayoutModule } from './layout/layout.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServicesOverviewModule } from './services-overview/services-overview.module';
import { AuthentificationServiceOverviewComponent } from './authentification-service-overview/authentification-service-overview.component';

@NgModule({
  declarations: [ComponentsComponent, DashboardComponent, AuthentificationComponent, ErrorPageComponent, AuthentificationServiceOverviewComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsRoutingModule,
    LayoutModule,
    ServicesOverviewModule,
  ],
  exports: [AuthentificationComponent],
})
export class ComponentsModule { }
