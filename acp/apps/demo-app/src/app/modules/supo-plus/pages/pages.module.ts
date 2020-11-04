import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManagementPageComponent } from './data-management-page/data-management-page.component';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [DataManagementPageComponent, UserManagementPageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ComponentsModule
  ]
})
export class PagesModule { }
