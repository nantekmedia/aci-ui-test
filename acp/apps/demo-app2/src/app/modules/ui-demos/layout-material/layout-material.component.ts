import { Component, OnInit } from '@angular/core';
import { HeaderSubService } from 'acp-ui';
export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}
@Component({
    selector: 'acp-layout-material',
    templateUrl: './layout-material.component.html',
    styleUrls: ['./layout-material.component.scss'],
})
export class LayoutMaterialComponent implements OnInit {
    tiles: Tile[] = [
        { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
        { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
        { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    ];
    constructor(private _subHeaderService: HeaderSubService) {}

    ngOnInit(): void {
        setTimeout(() => {
            this._subHeaderService.title = 'UI Layout - Material';
        }, 1);
    }
}
