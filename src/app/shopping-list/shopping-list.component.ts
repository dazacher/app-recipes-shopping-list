import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
// import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];

  ingredients: Ingredient[];

  constructor(private sLService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sLService.getIngredients();
    this.sLService.ingredicentsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    }
    );
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }
}
