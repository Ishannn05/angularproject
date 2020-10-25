import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amtInput', {static: false}) amtInputRef: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit(): void {
  }

  public onAddIngredient(): void{
    this.addIngredient.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amtInputRef.nativeElement.value));
  }
}
