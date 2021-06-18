import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://easychickenrecipes.com/wp-content/uploads/2019/03/chicken-white-wine-sauce-4-of-8-599x860.jpg'),
    new Recipe('Recipe 2 Test', 'This is a test', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/09/03/20/turmeric-chicken-kebabs.jpg?width=640&auto=webp&quality=75')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
