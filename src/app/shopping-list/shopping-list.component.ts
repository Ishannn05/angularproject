import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Oranges", 5)];
  constructor() { }

  ngOnInit(): void {
    console.log("Shopping list has been initialized.");
  }

  public onIngredientAdded(ingredient:Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
