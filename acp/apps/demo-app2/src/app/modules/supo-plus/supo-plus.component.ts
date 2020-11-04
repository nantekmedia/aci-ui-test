import { Component, OnInit } from '@angular/core';
import { HeaderSubService } from 'acp-ui';

@Component({
  selector: 'acp-supo-plus',
  templateUrl: './supo-plus.component.html',
  styleUrls: ['./supo-plus.component.scss']
})
export class SupoPlusComponent implements OnInit {

  constructor(public _subHeaderService: HeaderSubService ) { }

  ngOnInit(): void {
    setTimeout(() => {this._subHeaderService.title = 'Supo Plus';}, 1);
  }

}
