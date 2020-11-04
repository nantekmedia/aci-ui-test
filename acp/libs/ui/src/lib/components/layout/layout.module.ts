import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
// import { HasPermissionDirective } from '../../services/menu/hasPermissionsDirective';
import { HasPermissionDirective2 } from '../../services/menu/hasPermissionDirective2';
import { FormsModule } from '@angular/forms';
// import { UiModule } from '../../ui.module';

@NgModule({
  declarations: [LayoutComponent, HasPermissionDirective2],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    TranslateModule,
    FormsModule,
  ],
  exports: [LayoutComponent, HasPermissionDirective2]
})
export class LayoutModule { }