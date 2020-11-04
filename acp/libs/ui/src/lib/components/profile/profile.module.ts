import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from '../../material.module';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule, NgbNavModule } from 'acp-ui';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    MatTabsModule,    
    NgbModule,
    NgbNavModule,
  ]
})
export class ProfileModule { }
