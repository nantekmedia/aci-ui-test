import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class HeaderSubService {
    private _title: string;
    public titleChange: EventEmitter<String> = new EventEmitter<String>();

    get title(): string {
        return this._title;
    }

    set title(thisTitle: string) {
        this._title = thisTitle;
        this.titleChange.emit(this._title);
    }

    public t: string;
    constructor() {}
}
