import { Directive, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core'

@Directive({ selector: '[appDnd]' })
export class DropdownDirective {
    @HostBinding('class.show') openOrNot: boolean = false;
    @HostListener('click') toggleShow() {
        if (!this.openOrNot)
            console.log(this.elRef.nativeElement.children[1].classList.add('show'));
        else 
            console.log(this.elRef.nativeElement.children[1].classList.remove('show'));
        this.openOrNot = !this.openOrNot;
    }
    constructor(private elRef: ElementRef) { }
}