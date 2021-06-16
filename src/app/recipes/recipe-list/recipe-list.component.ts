import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://easychickenrecipes.com/wp-content/uploads/2019/03/chicken-white-wine-sauce-4-of-8-599x860.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
