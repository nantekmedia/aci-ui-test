import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { TabSetComponent } from './tab-set/tab-set.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from '../../in-memory-data-service';
// import { HttpClientModule } from '@angular/common/http';
// import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'acp-ui';
@NgModule({
  declarations: [ComponentsComponent, TabSetComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,    
    MaterialModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,   
  ]
})
export class ComponentsModule { }
