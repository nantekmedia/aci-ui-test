import { Component, OnInit } from '@angular/core';
import { HeaderSubService } from 'acp-ui';

@Component({
  selector: 'acp-supplier-matching',
  templateUrl: './supplier-matching.component.html',
  styleUrls: ['./supplier-matching.component.scss']
})
export class SupplierMatchingComponent implements OnInit {

  constructor( private _subHeaderService: HeaderSubService ) { }

  ngOnInit(): void {
    setTimeout(() => {this._subHeaderService.title = 'Supplier Matching';}, 1);
  }

}
