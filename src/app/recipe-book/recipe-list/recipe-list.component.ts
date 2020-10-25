import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'; //Importing the model class

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() itemClick = new EventEmitter<Recipe>();
  
  public _recipes: Recipe[] = [new Recipe("Test Recipe", "This is a sample description for the test recipe", "https://c.ndtvimg.com/2019-06/go4418h8_garlic-recipes-mushrooms-in-garlic-sauce_625x300_20_June_19.jpg"),
  new Recipe("Test Recipe", "This is a sample description for the test recipe", "https://c.ndtvimg.com/2019-06/go4418h8_garlic-recipes-mushrooms-in-garlic-sauce_625x300_20_June_19.jpg")];
  
  constructor() { }

  ngOnInit(): void {
  }

  public onItemClick(recipeItem:Recipe): void{
    this.itemClick.emit(recipeItem);
  }
}
