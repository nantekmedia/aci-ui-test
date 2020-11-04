import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { HeaderSubService } from 'acp-ui';
import { DataManagementGridDataSource, DataManagementGridItem } from './data-management-grid-datasource';

@Component({
  selector: 'acp-data-management-grid',
  templateUrl: './data-management-grid.component.html',
  styleUrls: ['./data-management-grid.component.scss']
})
export class DataManagementGridComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DataManagementGridItem>;
  dataSource: DataManagementGridDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private _subHeaderService: HeaderSubService) { }

  ngOnInit() {
    this.dataSource = new DataManagementGridDataSource(); 
    setTimeout(() => {this._subHeaderService.title = 'Supplier Network - Data Management';}, 1)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
