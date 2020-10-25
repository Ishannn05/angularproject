import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    
    private _collapsed : boolean = true;
    @Output() navClicked = new EventEmitter<string>();

    public get collapsed() : boolean {
        return this._collapsed;
    }
    public set collapsed(v : boolean) {
        this._collapsed = v;
    }

    public onSelect(event):void {
        this.navClicked.emit(event.target.textContent);
        //console.log(event.target.textContent);
    }
}