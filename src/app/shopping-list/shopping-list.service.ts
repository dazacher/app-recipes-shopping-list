import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

// import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredicentsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];


    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredicentsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients){
        //     this.addIngredients(ingredients);
        // }
        this.ingredients.push(...ingredients);
        this.ingredicentsChanged.emit(this.ingredients.slice());
    }
}