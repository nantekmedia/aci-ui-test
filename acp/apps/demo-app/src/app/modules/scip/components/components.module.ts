import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManagementGridComponent } from './data-management-grid/data-management-grid.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [DataManagementGridComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [DataManagementGridComponent]
})
export class ComponentsModule { }
