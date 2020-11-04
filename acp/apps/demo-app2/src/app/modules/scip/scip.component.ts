import { Component, OnInit } from '@angular/core';
import { HeaderSubService } from 'acp-ui';

@Component({
  selector: 'acp-scip',
  templateUrl: './scip.component.html',
  styleUrls: ['./scip.component.scss']
})
export class ScipComponent implements OnInit {

  constructor(public _subHeaderService: HeaderSubService) { }

  ngOnInit(): void {
    
    setTimeout(() => {this._subHeaderService.title = 'SCIP';}, 1);
  }

}
